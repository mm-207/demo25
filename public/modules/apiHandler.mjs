const HTTP_METHODS = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    PUT: "PUT"
};

const isPROD = true;
const BASE_API_TEST1 = "Test1/";
const BASE_API_TEST2 = "Test2/";
const BASE_API_PROD = "";

const BAS_API = (isPROD) ? BASE_API_PROD : BASE_API_TEST1;

const API_ENDPOINTS_TECTREE_SERVER = {
    GetTree: `${BAS_API}/tree`,
    DeletNode: (id) => `${BAS_API}/tree/${id}`,
}

async function retriveUsersTecTre(userID) {
    const tree = await runRequest(API_ENDPOINTS_TECTREE_SERVER.GetTree);
}

async function delteTecTreNode(nodeID) {
    const tree = await runRequest(API_ENDPOINTS_TECTREE_SERVER.DeletNode(nodeID));
}


async function runRequest(path, method = HTTP_METHODS.GET, data = null) {

    const request = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    }

    if ([HTTP_METHODS.POST, HTTP_METHODS.PATCH, HTTP_METHODS.PUT].any(method)) {
        request.body = JSON.stringify(data);
    }


    const respons = await fetch(path, request);

    return await respons.json();
}

console.log(`API is runing ${isPROD ? "PROD" : "Test"} `);
