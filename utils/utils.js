
const { request, expect } = require('@playwright/test');
import { _Response } from './response';
require('dotenv').config();

const getPositiveResponse = async (element) => {
    //declaring context
    const context = await request.newContext({
        baseURL: process.env.URL,
        extraHTTPHeaders: {
            // We set this header per GitHub guidelines.
            'Accept': 'application/json',
            // Add authorization token to all requests
            'Authorization': `${process.env.TOKEN}`,
        },
    });
    const response = await context.get(`/${element}`);
    expect(response.status()).toBe(_Response.getPositive);
    expect(response.status()).toBeWithinRange(200,300);
    expect.soft(response.statusText()).not.toBe("Error");
    expect.soft(response.ok()).toBeTruthy();
    expect.soft(response.status()).toBeGreaterThanOrEqual(200)
    const res = await response.json();
    return res;
    
}
const postPositiveResponse = async (element, payload) => {

    const context = await request.newContext({
        baseURL: process.env.URL,
    });
    const response = await context.post(`/${element}`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': `${process.env.TOKEN}`,
        },
        data: {
            payload
        }
    });
    expect(response.status()).toBe(_Response.postPositive);
    expect(response.status()).toBeWithinRange(200, 300);
    expect.soft(response.statusText()).not.toBe("Error");;
    expect.soft(response.ok()).toBeTruthy();
    expect.soft(response.status()).toBeGreaterThanOrEqual(200)
    const res = await response.json();
    return res;
}

const putPositiveResponse = async (element, payload) => {

    const context = await request.newContext({
        baseURL: process.env.URL,
    });
    const response = await context.put(`/${element}`, {
        headers: {
            'Accept': 'application/json',
            // Add GitHub personal access token.
            'Authorization': `${process.env.TOKEN}`,
        },
        data: {
            payload
        }
    });
    expect(response.status()).toBe(_Response.putPositive);
    expect(response.status()).toBeWithinRange(200, 300);
    expect.soft(response.statusText()).not.toBe("Error");;
    expect.soft(response.ok()).toBeTruthy();

    //expect.soft(response.status()).toBe(200);
    expect.soft(response.status()).toBeGreaterThanOrEqual(200)
    const res = await response.json();
    return res;
}

const patchPositiveResponse = async (element, payload) => {

    const context = await request.newContext({
        baseURL: process.env.URL,
    });
    const response = await context.patch(`/${element}`, {
        headers: {
            'Accept': 'application/json',
            // Add GitHub personal access token.
            'Authorization': `${process.env.TOKEN}`,
        },
        data: {
            payload
        }
    });
    expect(response.status()).toBe(_Response.patchPositive);
    expect(response.status()).toBeWithinRange(200, 300);
    expect.soft(response.statusText()).not.toBe("Error");;
    expect.soft(response.ok()).toBeTruthy();
    expect.soft(response.status()).toBeGreaterThanOrEqual(200)
    const res = await response.json();
    return res;
}

const deletePositiveResponse = async (element, payload) => {

    const context = await request.newContext({
        baseURL: process.env.URL,
    });
    const response = await context.delete(`/${element}`, {
        headers: {
            'Accept': 'application/json',
            // Add GitHub personal access token.
            'Authorization': `${process.env.TOKEN}`,
        },
        data: {
            payload
        }
    });
    expect(response.status()).toBe(_Response.deletePositive);
    expect(response.status()).toBeWithinRange(200, 300);
    expect(response.statusText()).not.toBe("Error");
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBeGreaterThanOrEqual(200);
    return response;
}

const getNegativeResponse = async (element) => {
    //declaring context
    const context = await request.newContext({
        baseURL: process.env.URL,
        extraHTTPHeaders: {
            // We set this header per GitHub guidelines.
            'Accept': 'application/json',
            // Add authorization token to all requests
            'Authorization': `${process.env.TOKEN}`,
        },
    });
    const response = await context.get(`/${element}`);
    expect(response.status()).toBe(_Response.getNegative);
    expect(response.status()).toBeWithinRange(400, 600);
    expect.soft(response.ok()).not.toBe("ok");
    expect.soft(response.ok()).toBeFalsy();
    expect.soft(response.status()).not.toEqual(200);
    expect.soft(response.status()).toBeGreaterThanOrEqual(400);
    const res = await response.json();
    return res;
}

const postNegativeResponse = async (element, payload) => {

    const context = await request.newContext({
        baseURL: process.env.URL,
    });
    const response = await context.post(`/${element}`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': `${process.env.TOKEN}`,
        },
        data: {
            payload
        }
    });
    expect(response.status()).toBe(_Response.postNegative);
    expect(response.status()).toBeWithinRange(400, 600);
    expect.soft(response.ok()).not.toBe("ok");
    expect.soft(response.ok()).toBeFalsy();
    expect.soft(response.status()).not.toEqual(200);
    expect.soft(response.status()).toBeGreaterThanOrEqual(400);
    const res = await response.json();
    return res;
}
const putNegativeResponse = async (element, payload) => {

    const context = await request.newContext({
        baseURL: process.env.URL,
    });
    const response = await context.put(`/${element}`, {
        headers: {
            'Accept': 'application/json',
            // Add GitHub personal access token.
            'Authorization': `${process.env.TOKEN}`,
        },
        data: {
            payload
        }
    });
    expect(response.status()).toBe(_Response.putNegative);
    expect(response.status()).toBeWithinRange(400, 600);
    expect.soft(response.ok()).not.toBe("ok");
    expect.soft(response.ok()).toBeFalsy();
    expect.soft(response.status()).not.toEqual(200);
    expect.soft(response.status()).toBeGreaterThanOrEqual(400);
    const res = await response.json();
    return res;
}

const patchNegativeResponse = async (element, payload) => {

    const context = await request.newContext({
        baseURL: process.env.URL,
    });
    const response = await context.patch(`/${element}`, {
        headers: {
            'Accept': 'application/json',
            // Add GitHub personal access token.
            'Authorization': `${process.env.TOKEN}`,
        },
        data: {
            payload
        }
    });
    expect(response.status()).toBe(_Response.patchNegative);
    expect(response.status()).toBeWithinRange(400, 600);
    expect.soft(response.ok()).not.toBe("ok");
    expect.soft(response.ok()).toBeFalsy();
    expect.soft(response.status()).not.toEqual(200);
    expect.soft(response.status()).toBeGreaterThanOrEqual(400);
    const res = await response.json();
    return res;
}

const deleteNegativeResponse = async (element, payload) => {

    const context = await request.newContext({
        baseURL: process.env.URL,
    });
    const response = await context.delete(`/${element}`, {
        headers: {
            'Accept': 'application/json',
            // Add GitHub personal access token.
            'Authorization': `${process.env.TOKEN}`,
        },
        data: {
            payload
        }
    });
    expect(response.status()).toBe(_Response.deleteNegative);
    expect(response.status()).toBeWithinRange(400, 600);
    expect.soft(response.ok()).not.toBe("ok");
    expect.soft(response.ok()).toBeFalsy();
    expect.soft(response.status()).not.toEqual(200);
    expect.soft(response.status()).toBeGreaterThanOrEqual(400);
    return response;
}


module.exports = {
    getPositiveResponse,
    postPositiveResponse,
    putPositiveResponse,
    patchPositiveResponse,
    deletePositiveResponse,
    getNegativeResponse,
    postNegativeResponse,
    patchNegativeResponse,
    deleteNegativeResponse,
    putNegativeResponse,
};


