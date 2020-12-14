// fails to compile with error `Argument of type '(msg: any, sender: any, 
// sendResponse: Function) => void' is not assignable to parameter of type
// '() => void'.`
// @ts-expect-error - force compilation
chrome.runtime.onMessage.addListener((msg: any,
    sender: chrome.runtime.MessageSender, sendResponse: Function) => {
    console.log(msg, sender, sendResponse);
    sendResponse("Received");
});
