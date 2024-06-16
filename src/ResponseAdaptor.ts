import { Response } from "express";
import { HttpResponse } from "@aws-sdk/protocol-http";

export class ResponseAdapter {
  private readonly expressResponse: Response;

  constructor(expressResponse: Response) {
    this.expressResponse = expressResponse;
  }

  adapt(awsResponse: HttpResponse): void {
    this.expressResponse.status(awsResponse.statusCode);
    Object.entries(awsResponse.headers).forEach(([key, value]) =>
      this.expressResponse.setHeader(key, value),
    );
  }
}
