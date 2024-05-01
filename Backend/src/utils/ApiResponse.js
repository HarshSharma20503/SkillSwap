class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    console.log("\n******** Inside ApiResponse ********");
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
