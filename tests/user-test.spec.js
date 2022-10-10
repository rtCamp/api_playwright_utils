import { test, expect, request } from "@playwright/test";
import { set_new_role, patch_new_role } from "../payload";
let site_id, user_id, org_id;

test("should fetch the current logged-in user details with", async ({ request, baseURL,}) =>{
    
    const response = await request.get(`${baseURL}/user/me`);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const res = await response.json();
    expect(res.username).toEqual("alvitazwar");
    // Storing the ID of the user
    user_id = res.id;
    console.log("User ID", user_id);
    //Storing Org ID
    org_id = res.organization.id; // using basic dot method to access the values
    console.log("ORG_ID", org_id);
});

test("should fetch the user details that matches the ID", async ({request, baseURL}) => {

    const response = await request.get(`${baseURL}/user/${user_id}`);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const res = await response.json();
    // Verify
    expect(res.id).toEqual(user_id);
});

test("should update the user information matches the Correct ID ", async ({request, baseURL}) => {
   
    const response = await request.patch(`${baseURL}/user/${user_id}`);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const res = await response.json();
    // Verify
    expect(res.affected).toEqual(1);
});


