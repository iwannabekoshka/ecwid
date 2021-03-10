// Initialize the application
EcwidApp.init({
	app_id: "yasnaya-polyana", // your client_id
	autoloadedflag: true,
	autoheight: true
});

// Get the store ID and access token
const storeData = EcwidApp.getPayload();
const storeId = storeData.store_id;
const accessToken = storeData.access_token;
const language = storeData.lang;

if (storeData.public_token !== undefined){
	const publicToken = storeData.public_token;
}

if (storeData.app_state !== undefined){
	const appState = storeData.app_state;
}