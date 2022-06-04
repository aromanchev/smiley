export const initWeb3= async () => {
    const { ethereum } = window;

	if (!!ethereum) {
        return await ethereum.request({ method: 'eth_requestAccounts' }).then((account) => console.log('Connected account(s):', account));
    }
}