import * as ethers from "ethers";
import { useCompiler } from "@ethereum-sourcify/lib-sourcify";
import inputJson from "./input.json" assert { type: "json" };
// import inputJson from "./input-optimizer-disabled.json" assert { type: "json" };
// import inputJson from "./input-select-all.json" assert { type: "json" };
// import inputJson from "./input-empty-new-version.json" assert { type: "json" };
// import inputJson from "./input-storage-0.1.5.json" assert { type: "json" };
async function getDeployedBytecodeResult(input) {
    const compilerResult = await useCompiler("0.2.0+commit.4dc2445e", 
    // "0.1.5+commit.23865e3",
    // "0.8.18+commit.87f61d96",
    input);
    const tempresult = compilerResult.contracts[""].GroveLib.evm.deployedBytecode
        .object;
    return tempresult;
}
async function main() {
    const result1 = await getDeployedBytecodeResult(inputJson);
    const result2 = await getDeployedBytecodeResult(inputJson);
    const result3 = await getDeployedBytecodeResult(inputJson);
    console.log();
    console.log("Keccak256 of the first invocation of useCompiler:\n" +
        ethers.keccak256("0x" + result1));
    console.log("Keccak256 of the second invocation of useCompiler:\n" +
        ethers.keccak256("0x" + result2));
    console.log("Keccak256 of the second invocation of useCompiler:\n" +
        ethers.keccak256("0x" + result3));
    console.log("\nHash matching mainnet:\n0xc778f3d42ce4a7ee21a2e93d45265cf771e5970e0e36f882310f4491d0ca889d");
}
await main();
//# sourceMappingURL=index.js.map