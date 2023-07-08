import * as ethers from 'ethers';
import {useCompiler, type JsonInput} from '@ethereum-sourcify/lib-sourcify';
import inputJson from './input.json' assert { type: 'json' };

async function getDeployedBytecodeResult(input: any): Promise<string> {
	const compilerResult: any = await useCompiler('0.1.5+commit.23865e3', input as JsonInput);
	return compilerResult.contracts[''].GroveLib.evm.deployedBytecode.object as string;
}

async function main() {
	const result1 = await getDeployedBytecodeResult(inputJson);
	const result2 = await getDeployedBytecodeResult(inputJson);
	console.log();
	console.log('Keccak256 of the first invocation of useCompiler:\n' + ethers.keccak256('0x' + result1));
	console.log('Keccak256 of the second invocation of useCompiler:\n' + ethers.keccak256('0x' + result2));
	console.log('\nHash matching mainnet:\n0xc778f3d42ce4a7ee21a2e93d45265cf771e5970e0e36f882310f4491d0ca889d');
}

await main();
