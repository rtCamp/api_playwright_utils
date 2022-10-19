import { test } from "@playwright/test";
import {
    GetPositiveResponse,
    PostPositiveResponse,
    PutPositiveResponse,
    PatchPositiveResponse,
    DeletePositiveResponse,
    GetNegativeResponse,
    PostNegativeResponse,
} from "../utils/utils"
import { set_new_booking, update_request, patch_request, negative_post } from "../payload"

test("should test Positive response in Get request", async () => {
    const result = await GetPositiveResponse("api/users?page=2");
    console.log(result);

});

test('should test Positive response in Post request', async ({ request, baseURL }) => {
    const result = await PostPositiveResponse("api/usersusers", set_new_booking);
    console.log(result);

});

test('should test Positive response in put request', async () => {
    const result = await PutPositiveResponse("api/users/2", update_request());
    console.log(result);
});

test('should test Positive response in patch request', async () => {
    const result = await PatchPositiveResponse("api/users/2", patch_request());
    console.log(result);
});

test('should test Positive response in delete request', async () => {
    const result = await DeletePositiveResponse("api/users/2");
    console.log(result);
});

test("should test Negative response in get request", async () => {
    const result = await GetNegativeResponse("api/users/23");
    console.log(result);
});

test("should test Negative response in post request", async () => {
    const result = await PostNegativeResponse("api/register", negative_post());
    console.log(result);
});
