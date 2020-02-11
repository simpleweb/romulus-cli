import axios from "axios";
import { recordSaga } from "test-utilities";
import { RequestExample } from "./RequestExample";

const get = axios.get as jest.Mock;

beforeEach(() => {
  jest.resetAllMocks();
});

it("should get a color", async () => {
  get.mockReturnValueOnce({ data: "hello" });

  const dispatched = await recordSaga(RequestExample);

  expect(dispatched).toContainEqual({
    type: "REQUEST_EXAMPLE_SUCCESS",
    result: { data: "hello" },
  });
});
