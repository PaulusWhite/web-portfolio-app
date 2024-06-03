interface IPostRequestBody {
  name: string;
  email: string;
  message: string;
}

interface IResponseData {
  isError: boolean;
  message: string;
}

export type { IPostRequestBody, IResponseData };
