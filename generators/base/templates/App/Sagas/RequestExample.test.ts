import axios from "axios";
import { recordSaga } from "test-utilities";
import { RequestExample } from "./RequestExample";

const get = axios.get as jest.Mock;

beforeEach(() => {
  jest.resetAllMocks();
});

it("should respond with the example data", async () => {
  get.mockReturnValue({ data: "hello" });

  const dispatched = await recordSaga(RequestExample);

  expect(dispatched).toContainEqual({
    type: "REQUEST_EXAMPLE_SUCCESS",
    result: { data: "hello" },
  });
});

it("should handle a server error", async () => {
  get.mockRejectedValue({
    response: { message: "Couldn’t find that user" },
  });

  const dispatched = await recordSaga(RequestExample);

  expect(dispatched).toContainEqual({
    type: "REQUEST_EXAMPLE_ERROR",
    error: {
      response: {
        message: "Couldn’t find that user",
      },
    },
  });
});

it("should handle other errors", async () => {
  get.mockRejectedValue(new Error());

  const dispatched = await recordSaga(RequestExample);

  expect(dispatched).toContainEqual({
    type: "REQUEST_EXAMPLE_ERROR",
    error: "Network error",
  });
});
