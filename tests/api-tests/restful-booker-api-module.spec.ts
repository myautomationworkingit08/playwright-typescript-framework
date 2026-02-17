import { request } from "node:http";
import { expect, test } from "../../fixtures/hooks-fixture";
import apiPathData from "../../test-data/api-data/api-path-data.json"
import restfulBookerData from "../../test-data/api-data/restful-booker-api-module-data.json"


test("[Restful-Booker>Booking] Verify user is able to get all the booking Ids using GET API and receive valid response", {
    tag: ['@UAT', '@API'],
    annotation: {
        type: "Test Case link",
        description: "https://www.google.com"
    }
}, async ({ request }) => {
    const bookingIdsResp = await request.get(apiPathData.booking_path);
    const bookingIdsJsonResp = await bookingIdsResp.json();
    console.log(bookingIdsJsonResp);
    expect(bookingIdsResp.status()).toBe(200);
    expect(bookingIdsResp.statusText()).toBe('OK');
    // expect(bookingIdsResp.ok()).toBeTruthy();
    expect(bookingIdsJsonResp).not.toBeNull();
    expect(bookingIdsResp.headers()['content-type']).toBe(restfulBookerData.content_type);
})

test("[Restful-Booker>Booking] Verify user is able to fetch booking details for a booking Id using GET API and recieve valid response", {
    tag: ['@UAT', '@API'],
    annotation: {
        type: "Test Case Link",
        description: "https://www.google.com"
    }
}, async ({ request, createBookingFixture, cleanUpBookingFixture }) => {
    const bookingResp = await request.get(`${apiPathData.booking_path}/1130`);
    const bookingJsonResp = await bookingResp.json();
    console.log(bookingJsonResp);
    expect(bookingResp.status()).toBe(200);
    expect(bookingResp.statusText()).toBe('OK');
    expect(bookingJsonResp).not.toBeNull();
    // expect(bookingJsonResp.firstname).toEqual(restfulBookerData.first_name);
})

test("[Restful-Booker>Booking] Verify user is able to create a new booking using POST API and recieve valid response", {
    tag: ['@UAT', '@API'],
    annotation: {
        type: "Test Case Link",
        description: "https://www.google.com"
    }
}, async ({ request }) => {
    const createBookingResp = await request.post(apiPathData.booking_path, {
        data: restfulBookerData.create_booking
    });
    const createBookingJsonResp = await createBookingResp.json();
    expect(createBookingResp.status()).toBe(200);
    console.log(createBookingJsonResp);
    expect(createBookingResp.statusText()).toBe('OK');
    expect(createBookingJsonResp.booking).toMatchObject(restfulBookerData.create_booking);
})

test("[Restful-Booker>Booking] Verify user is able to Update existing booking using PUT API and recieve valid response", {
    tag: ['@UAT', '@API'],
    annotation: {
        type: "Test Case Link",
        description: "https://www.google.com"
    }
}, async ({ request, commonApiUtilsFixture, createBookingFixture, cleanUpBookingFixture }) => {
    const apiToken = await commonApiUtilsFixture.createToken();
    const updateBookingResp = await request.put(`${apiPathData.booking_path}/${createBookingFixture}`, {
        headers: {
            Cookie: `token=${apiToken}`
        },
        data: restfulBookerData.update_booking
    });
    const updateBookingJsonResp = await updateBookingResp.json();
    expect(updateBookingResp.status()).toBe(200);
    console.log(updateBookingJsonResp);
    expect(updateBookingResp.statusText()).toBe('OK');
    expect(updateBookingJsonResp).toMatchObject(restfulBookerData.update_booking);
})

test("[Restful-Booker>Booking] Verify user is able to partially update existing booking using PATCH API and recieve valid response", {
    tag: ['@UAT', '@API'],
    annotation: {
        type: "Test Case Link",
        description: "https://www.google.com"
    }
}, async ({ request, commonApiUtilsFixture, createBookingFixture, cleanUpBookingFixture }) => {
    const apiToken = await commonApiUtilsFixture.createToken();
    const partUpdateBookingResp = await request.patch(`${apiPathData.booking_path}/${createBookingFixture}`, {
        headers: {
            Cookie: `token=${apiToken}`
        },
        data: restfulBookerData.partial_update_booking
    });
    const partUpdateBookingJsonResp = await partUpdateBookingResp.json();
    expect(partUpdateBookingResp.status()).toBe(200);
    console.log(partUpdateBookingJsonResp);
    expect(partUpdateBookingResp.statusText()).toBe('OK');
    expect(partUpdateBookingJsonResp.firstname).toEqual(restfulBookerData.partial_update_booking.firstname);
    expect(partUpdateBookingJsonResp.lastname).toEqual(restfulBookerData.partial_update_booking.lastname);
})

test("[Restful-Booker>Booking] Verify user is able to delete existing booking using DELETE API and recieve valid response", {
    tag: ['@UAT', '@API'],
    annotation: {
        type: "Test Case Link",
        description: "https://www.google.com"
    }
}, async ({ request, commonApiUtilsFixture, createBookingFixture }) => {
    const apiToken = await commonApiUtilsFixture.createToken();
    const deleteBookingResp = await request.delete(`${apiPathData.booking_path}/${createBookingFixture}`, {
        headers: {
            Cookie: `token=${apiToken}`
        }
    });
    expect(deleteBookingResp.status()).toBe(201);
    expect(deleteBookingResp.statusText()).toBe('Created');

    const getBookingResp = await request.get(`${apiPathData.booking_path}/${createBookingFixture}`);
    expect(getBookingResp.status()).toBe(404);
    expect(getBookingResp.statusText()).toBe('Not Found');
})

