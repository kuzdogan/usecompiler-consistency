# lib-sourcify/solc-js useCompiler bug
As this example shows, if you invoke `useCompiler` two times in a row with the same input, the resulting deployed bytecode is different. This makes verifications fail because the standard pattern is to first compile the sources to get some metadata and then recompile and check the output based on that metadata.

### Install and run
```
npm install
npm run start
```
`useCompiler` is called twice on the same standard input JSON located in `input.json`. We would expect the keccak256 hashes of the deployed bytecode from both invocations to be the same, but it is not.
