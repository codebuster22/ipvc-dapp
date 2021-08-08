## Contracts

# WarriorCore

## Write

### `generateHash()`
generate a message hash which needs to be signer by origin to allow access.

Type - `view` function

Access - '*'
#### Input
1. to - string/address - address of warrior core
2. from - string/address - address of signer/user who wants to generate warrior.
3. metadata - string/bytes32 - the unique metadata which will be used to generate warrior

#### Output
1. string/bytes32 - a bytes32 hash which needs to be signer by origin account using the API GET from dAppp.

#### Example
```js
// unique metadata which will be used to generate warriors
const metadata = "0x1234850...";
// address of warrior core
const to = warriorCore.address;
// address of user/signer
const from = await signer.getAddress();
// returns a bytes32 message hash which needs to be signer by origin account.
const messageHash = await warriorCore.generateHash(to, from, metadata);
```

### `generateWarrior()`
generate/mint warrior for a user. It generated unique gene, mint warrior with that gene and transfer ownership to the ower.

Type - transaction Function

Access - `onlyOrigin`. Only be invoked when the signature provided is of origin account.
#### Input
1. owner - string/address - address of person who wants to generate warrior. That is user address
2. metadata - string/bytes32 - metadata which will be used to generate unique gene
3. originSignature - string/bytes - signature signed by origin address.

#### Example
```js
// unique metadata which will be used to generate warriors
const metadata = "0x1234850...";
// address of warrior core
const to = warriorCore.address;
// address of user/signer
const from = await signer.getAddress();
// returns a bytes32 message hash which needs to be signer by origin account.
const messageHash = await warriorCore.generateHash(to, from, metadata);
// do a GET request to API with query string as metadata=${messageHash} to get signature from origin
const response = queryApiForSignature(messageHash);
// we are ready to create warrior.
await warriorCore.connect(signer).generateWarrior(from, metadata, response.data.signature);
```

### `setGeneGenerator()` - Not be used in front-end
set new gene generator contract address. Gene generator is the contract that have logic behind the generation of unique gene.

Type - transaction Function

Access - `onlyAdmin`. Only be invoked by admin account
#### Input
1. newGeneGenerator - string/address - address of new geneGenerator

#### Example
```js
const newGeneGenerator = "0x123456....";
await warriorCore.connect(admin).setGeneGenerator(newGeneGenerator);
```

### `registerAsset()` - Not to be used in front-end
registers warrior assets for a generation using events.

Type - transaction Function

Access - `onlyAdmin`. Only be invoked by admin account
#### Input
1. layerId - Number/string - layer id to indentify which layer this asset belongs to.
2. assetCids - array of string/bytes32 - array of ipfs hash for the asset.
3. generation - generation id to identify which generation this asset belongs to.

#### Example
```js
const layerId = 0;
const assetsCids = ['Qmyx....','Qmya...'];
const generation = 0;
await warriorCore.connect(admin).registerAsset(layerId, assedsCids, generation);
```

### `initialize()`
initializes WarriorCore contract. This needs to be called only once after the WarriorCOre is deployed.

Type - transaction Function

Access - `onlyAdmin`. Only be invoked by admin account
#### Input
1. origin - string/address - address of origin whose signature is necessary for `onlyOrigin` functionality.
2. warriorGeneGeneratorContract - string/address - address of WarriorGeneGenerator contract which is necessary for generating unique gene.

#### Example
```js
const origin = '0x1234...';
const warriorGeneGeneratorAddress = '0x9876...';
await warriorCore.connect(admin).initialize(origin, warriorGeneGeneratorAddress);
```

## Read

### `getWarrior()`
get warrior gene for a warrior ID. Only if the warrior exists. If the warrior does not exists, it reverts.

Type - `view` Function

Access - `*`
#### Input
1. `_warriorId` - Number/String - Id of warrior whose gene needs to be returned

#### Output
1. `warrior` - BigNumber - Gene of warrior at warrior ID

### Example
```js
let warriorId = 1;
const warriorGene = await warriorCore.getWarrior(warriorId);
// BigNumber{ 185484531358783454358763584987568748 }

// if warrior does not exists
warriorId = 50000000;
try{
    const warriorGene = await warriorCore.getWarrior(warriorId);
    // Error
} catch (error) {
    // error.message:- "Warriors: warrior does not exist"
}
```

### `warriorCounter()`
returns total warrior count, or total population of all warriors that exists.

Type - `view` Function

Access - `*`
#### Output
1. BigNumber - total warrior that exists.

#### Example
```js
const totalPopulation = await warriorCore.warriorCounter();
// BigNumber { 100 }
```

### `isGeneUsed()`
checks if the gene is used or not. Won't be used a lot on front end, but just incase.

Type - `view` Function

Access - `*`
#### Input
1. gene - Number/String - gene which needs to be checked. Gene is of 76 digits, so it should mostly be string.

#### Output
1. isUsed - boolean - true if used and false if not used.

#### Example
```js
// checking if the gene 185484531358783454358763584987568748 is used or not
const gene = "185484531358783454358763584987568748";
const isUsed = await warriorCore.isGeneUsed(gene);
// boolean true/false
```

### `maxPopulation()`
returns maximum population for warriors

Type - `view` Function

Access - `*`
#### Output
1. BigNumber - maximum population for warriors

#### Example
```js
const maxPopulation = await warriorCore.maxPopulation();
// BigNumber { 27000000 }
```

### `maxPopulationPerGen()`
theoretically 100 thousand warriors can be minted per generation

Type - `view` Function

Access - `*`
#### Output
1. BigNumber - maximum population for warriors per generation can have theoretically

#### Example
```js
const maxPopulationPerGen = await warriorCore.maxPopulationPerGen();
// BigNumber { 100000 }
```

### `growthRate()`
population growth rate. this constant is responsible for calculating population for next generation

Type - `view` Function

Access - `*`
#### Output
1. BigNumber - grwoth rate

#### Example
```js
const growthRate = await warriorCore.growthRate();
// BigNumber { 391 }
// As solidity cannot handle float, the precision is hanlded by GROWTH_PRECISION
const growthPrecision = await warriorCore.GROWTH_PRECISION();
// BigNumber { 100 }

// realGrowthRate = grwothRate / Growth Precision
const realGrowthRate = growthRate.div(growthPrecision);
// BigNumber { 3.91 }
```

### `currentGenerationMaxPopulation()`
maximum population for current generation, calculated using logistics equation `y = r*x*(1-x)`

Type - `view` Function

Access - `*`
#### Output
1. BigNumber - maximum population for current generation

#### Example
```js
const currentGenerationMaxPopulation = await warriorCore.currentGenerationMaxPopulation();
// BigNumber { 14020 }
```

### `populationUntilLastGeneration()`
Total warrior population when last generation warrior generation was completed. `total warrior minted - total warrior minted for this current generation`

Type - `view` Function

Access - `*`
#### Output
1. BigNumber - warrior population before current warrior generation started

#### Example
```js
const populationUntilLastGeneration = await warriorCore.populationUntilLastGeneration();
// BigNumber { 0 }
```

### `currentGeneration()`
current generation id or current generation number. e.g. `gen0` will have `0`

Type - `view` Function

Access - `*`
#### Output
1. BigNumber - current generation number/id

#### Example
```js
const currentGeneration = await warriorCore.currentGeneration();
// BigNumber { 0 }
```

### `nextGenerationStartBlock()`
block number after which warriors for next generation can only be minted

Type - `view` Function

Access - `*`
#### Output
1. BigNumber - start block number

#### Example
```js
const nextGenerationStartBlock = await warriorCore.nextGenerationStartBlock();
// BigNumber { 2224161650 }
```

### `lastGeneration()` // might be depracted

### `isActive()`
checks if the warrior can be generated or not at this moment.

Type - `view` Function

Access - `*`
#### Output
1. boolean - true, if warrior can be generated

#### Example
```js
const isActive = await warriorCore.isActive();
// bool true/false
```

### `currentGenerationPopulation()`
returns the population of current generation

Type - `view` Function

Access - `*`
#### Output
1. BigNumber - current generation population

#### Example
```js
const currentGenerationPopulation = await warriorCore.currentGenerationPopulation();
// BigNumber { 18 }
```

### `getWarriorGeneration()`
get generation for a warrior id.

Type - `view` Function

Access - `*`
#### Input
1. _warriorId - Number/string - warrior id whose generation needs to be returned

#### Output
1. BigNumber - warrior generation id

#### Example
```js
const warriorId = 10;

const getWarriorGeneration = await warriorCore.getWarriorGeneration(warriorId);
// BigNumber { 0 }
```

### `isInitialized()`
check if the WarriorCOre contract is initialized or not. Contract needs to be initalized once only.

Type - `view` Function

Access - `*`
#### Output
1. boolean - true if initialized

#### Example
```js
const isInitialized = await warriorCore.isInitialized();
// bool true/false
```

### `isMetadataUsed()`
checks if metadata was used to generate warrior or not.

Type - `view` Function

Access - `*`
#### Input
1. metadata - bytes32 - metadata which needs to be checked

#### Output
1. boolean - true if metadata used

#### Example
```js
const metadata = "0x0101010101010101010101010101010101010101010101010101010101010101";
const isMetadataUsed = await warriorCore.isMetadataUsed();
// bool true/false
```

## Events
to query the data from events, use `queryEvents()`.

```js
const data = await queryEvents(contract, eventName [, queryArgs]);
```

### Input
1. contract - Object - This is the contract which emits the event.
2. eventName - string - Name of the event which needs to be queried
3. queryArgs - array - array of arguments which needs to be filtered

### Output
1. data - array - array of event argumnets which were emitted filtered by queryArgs

### Examples

#### WarriorGenerated

Have two query arguments:-
1. creator - address - address which minted this warrior
2. warriorId - number/string - id of warrior generated
```js
// with no query arguments
const data = await queryEvents(warriorCore, "WarriorGenerated");
// [
//     ["0x67BE2C36e75B7439ffc2DCb99dBdF4fbB2455930", BigNumber {1}],
//     ["0xd18Cd50a6bDa288d331e3956BAC496AAbCa4960d", BigNumber {2}],
//     ["0x67BE2C36e75B7439ffc2DCb99dBdF4fbB2455930", BigNumber {3}]
// ]

// filter with creator address
const queryArgs = ["0x67BE2C36e75B7439ffc2DCb99dBdF4fbB2455930"];
const data = await queryEvents(warriorCore, "WarriorGenerated", queryArgs);
// [
//     ["0x67BE2C36e75B7439ffc2DCb99dBdF4fbB2455930", BigNumber {1}],
//     ["0x67BE2C36e75B7439ffc2DCb99dBdF4fbB2455930", BigNumber {3}]
// ]

// filter with warrior id
const queryArgs = [null, 1];
const data = await queryEvents(warriorCore, "WarriorGenerated", queryArgs);
// [
//     ["0x67BE2C36e75B7439ffc2DCb99dBdF4fbB2455930", BigNumber {1}],
// ]
```

#### AssetsRegistered
Have three query arguments:-
1. generation - number/string - generation number
2. totalLayers - number/string - total number of layer
```js
// with no query arguments
const data = await queryEvents(warriorCore, "AssetsRegistered");
// [
//     [BigNumber {1}, BigNumber {6}, "0x7c7a99f603f231d53a4f39d1521f98d2e8bb279cf29bebfd0687dc98458e7f89"],
//     [BigNumber {2}, BigNumber {8}, "0x9a5a99f603f231d93a4f39d1521f98d2e8bb279cf29bebfd0687dc98458e7f89"],
//     [BigNumber {3}, BigNumber {10}, "0x7168799f603f231d53a4f39d1521f98d2e8bb499cf29bebfd0687dc98458e7f9"],
//     [BigNumber {4}, BigNumber {10}, "0x7168799f603f231d53a4f39d1521f98d2e8bb499cf29bebfd0687dc98458e7f9"],
//     .
//     .
//     .
// ]

// filter with asset id
const queryArgs = [1];
const data = await queryEvents(warriorCore, "AssetRegistered", queryArgs);
// [
//     [BigNumber {1}, BigNumber {6}, "0x7c7a99f603f231d53a4f39d1521f98d2e8bb279cf29bebfd0687dc98458e7f89"]
// ]

// filter with total layers
const queryArgs = [null, 10];
const data = await queryEvents(warriorCore, "AssetRegistered", queryArgs);
// [
//     [BigNumber {3}, BigNumber {10}, "0x7168799f603f231d53a4f39d1521f98d2e8bb499cf29bebfd0687dc98458e7f9"],
//     [BigNumber {4}, BigNumber {10}, "0x7168799f603f231d53a4f39d1521f98d2e8bb499cf29bebfd0687dc98458e7f9"]
// ]

// filter with ipfs hash
const queryArgs = [null, null ,getBytes32FromHash("QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz")];
const data = await queryEvents(warriorCore, "AssetRegistered", queryArgs);
// [
//     [BigNumber {2}, BigNumber {8}, "0x7c7a99f603f231d53a4f39d1521f98d2e8bb279cf29bebfd0687dc98458e7f89"]
// ]
```

#### AssetForLayerRegistered
Have two query arguments:-
1. layerId - id of layer whose assets have been created
2. generation - generation number/id
```js
// with no query arguments
const data = await queryEvents(warriorCore, "AssetForLayerRegistered");
// [
//     [BigNumber {1}, BigNumber {0}],
//     [BigNumber {2}, BigNumber {0}],
//     [BigNumber {3}, BigNumber {0}],
//     [BigNumber {1}, BigNumber {1}],
//     [BigNumber {2}, BigNumber {1}],
//     [BigNumber {3}, BigNumber {2}]
// ]

// filter with layerid
const queryArgs = [1];
const data = await queryEvents(warriorCore, "AssetForLayerRegistered", queryArgs);
// [
//     [BigNumber {1}, BigNumber {0}]
// ]

// filter with ipfs hash
const queryArgs = [null, 0];
const data = await queryEvents(warriorCore, "AssetForLayerRegistered", queryArgs);
// [
//     [BigNumber {1}, BigNumber {0}],
//     [BigNumber {2}, BigNumber {0}],
//     [BigNumber {3}, BigNumber {0}]
// ]
```