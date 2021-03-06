import "mocha";
import { expect } from "chai";
import { encrypt, decrypt } from "../handler";

const ENCRYPTION_KEY = `abfb7c8d48dfc4f1ce7ed92a44989f25`; // (Length of 32)
const ENCRYPTION_IV = `232fcfdc2e2b4767`; // (Length of 16)

describe("Test Handler Functions", () => {
  it.skip("should call encrypt method", async () => {
    const INPUT_STRING = `merchantCode=MERCHANT123|reservationId=100000274061812|txnAmount=458.00|currencyType=INR|appCode=ET|pymtMode=Internet|txnDate=20150717|securityId=CRIS|RU=http://localhost:7001/eticketing/BankResponse|checkSum=35FCE86D084D7ABAFFFE1C71CDD310B7EFF935A5CC1D5F43890036906F25A129`;
    const ENCRYPTED_STRING = `1DC8EB40F83B385497FC62AFFECB1C22F2A1617D2D524637F829BE8E2ED28E0106DF309052F573229C7034317ADF3BAFA430279FB7B8987519A01C060C60A4D22F262965B25887C048976256C07E7D5BCE3056C536BB36A51A27152316573413ADCC1B923DED3B50845A94EDD606F77AF4235A890649FFA7C9F35807149390385138445D1367B04B8E2166978098477966951A636D4FC53129DB72B7177F22BDF34158632AA7911DB27B97D47513DB5201D5A49CEAF1379CE9D2E65357D9D750D66F2CCAD93FE0A050D51EB96047E466D6FB3CB6FBF3F636C60785151686D9028473749CB94A1F36D53D6DFE5A0767E51460ABC1D13432FF542806AFBFD91AB98FEC990A9C4BF90542C2F2474DD90CC9A14B9633223F812534E2107266F01802`;

    let event = {
      body: "test",
      headers: {},
      httpMethod: "GET",
      isBase64Encoded: false,
      path: "/encrypt",
      pathParameters: {},
      queryStringParameters: {},
      stageVariables: {},
      requestContext: null,
      resource: "hello"
    };

    let result = await encrypt(event, null, null);

    expect(JSON.stringify(result)).is.equals(
      JSON.stringify({
        statusCode: 200,
        body: JSON.stringify({
          message:
            "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
          input: event
        })
      })
    );
  });

  it.skip("should call decrypt method", async () => {
    const INPUT_STRING = `1DC8EB40F83B385497FC62AFFECB1C22F2A1617D2D524637F829BE8E2ED28E0106DF309052F573229C7034317ADF3BAF5CCF84E50B0D2C60CBB1B9CFFCF9A2F7F2A5372E5ECC41819A366440ECD64F15EE788B0DDCFF234B1813D820EB1CF20A25C738943E945F95A1F92985100ADFAFC3CCC58711969D6FFAA7F3BC35A38D354967229F301E4BABE2DDC1B0F24D19985922FAF45357D7E18161FE4D5943168476E15E737611CF1E3A3CF79D17A7B6E241E7ED4BE8FB53B5C7A5EC345D04F66B94178D4E1B61B4E5F2BF99AF6A7C447097BFBEEBDB69B950AD14DAEC9AA13445`;
    const DECRYPTED_STRING = `merchantCode=MERCHANT123|reservationId=100000274061812|bankTxnId=IG01439494|txnAmount=458.00|status=Success|statusDesc=Completed successfully|checkSum=9550023F513ED8DC0B01D6DCABF2A8892F498B8E0187C6816AD9FBB3B747A5BD`;

    let event = {
      body: "test",
      headers: {},
      httpMethod: "POST",
      isBase64Encoded: false,
      path: "/decrypt",
      pathParameters: {},
      queryStringParameters: {},
      stageVariables: {},
      requestContext: null,
      resource: "hello"
    };

    let result = await decrypt(event, null, null);

    expect(JSON.stringify(result)).is.equals(
      JSON.stringify({
        statusCode: 200,
        body: JSON.stringify({
          message:
            "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
          input: event
        })
      })
    );
  });
});
