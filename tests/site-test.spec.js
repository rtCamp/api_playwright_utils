import { test, expect, request } from "@playwright/test";
import { set_new_role, patch_new_role } from "../payload";
let site_id, user_id, org_id;


test("should get the site details that are created and existed there", async ({ request, baseURL }) => {

    const response = await request.get(`${baseURL}/sites?offset=0&limit=10`);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const res = await response.json();

    let selected_id = res.sites.find((obj) => obj.server.properties.isUp == true).id;
    console.log("SELECTED_ID:", selected_id);
});

test("should compare pagination of the site page response", async ({
    request,
    baseURL,
}) => {
    // 1st Request
    const request_one = await request.get(`${baseURL}/sites?offset=0&limit=10`);
    expect(request_one.ok()).toBeTruthy();
    expect(request_one.status()).toBe(200);
    const response_one = await request_one.json() 
  
    //2nd request
    const request_two = await request.get(`${baseURL}/sites?offset=10&limit=20`);
    expect(request_two.ok()).toBeTruthy();
    expect(request_two.status()).toBe(200);
    const response_two = await request_two.json();
    expect(response_one.sites).not.toBe(response_two.sites);
});

test("should get the console log and error for not mactching with the incorrect ID", async ({ request, baseURL }) => {

    const response = await request.patch(`${baseURL}/user/404`);
    expect(response.ok()).toBeFalsy();
    expect(response.status()).toBe(404);
    const res = await response.json();
    // Verify
    expect(res.message).toContain("User not found");
    expect(res.error).toContain("NOT_FOUND");
});

