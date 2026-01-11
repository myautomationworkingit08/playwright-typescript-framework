import cryptoJs from 'crypto-js'

export class CommonUtils {

    private secretKey: string;

    constructor() {
        if (process.env.SECRET_KEY) {
            this.secretKey = process.env.SECRET_KEY
        } else {
            throw new Error("Please provide secret key before starting execution")
        }
    }

    /**
     * This method provides Encrypted data from given string
     * @param data 
     * @returns 
     */
    public encryptData(data: string) {
        const encryptedData = cryptoJs.AES.encrypt(data, this.secretKey).toString();
        console.log(encryptedData)
        return encryptedData;
    }

    /**
     * This method provides decrypted data in string format
     * @param encData 
     * @returns 
     */
    public decryptData(encData: string) {
        const decryptedData = cryptoJs.AES.decrypt(encData, this.secretKey)
            .toString(cryptoJs.enc.Utf8);
        return decryptedData;
        

    }
}