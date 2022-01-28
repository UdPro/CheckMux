/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/

const SHA256 = require("crypto-js/SHA256");
class Block {
  constructor(data) {
      this.hash = "";
    this.height = "";
    this.timeStamp = "";
    this.data = data;
    this.previousHash = "0x";
  }
}

/* ===== Blockchain ===================================
  |  Class with a constructor for blockchain data model  |
  |  with functions to support:                          |
  |     - createGenesisBlock()                           |
  |     - getLatestBlock()                               |
  |     - addBlock()                                     |
  |     - getBlock()                                     |
  |     - validateBlock()                                |
  |     - validateChain()                                |
  |  ====================================================*/

class Blockchain {
  constructor() {
    // new chain array
    this.chain = [];
    this.addBlock(new Block("First in the chain - Genesis Block"));
  }

  // addBlock method
  addBlock(newBlock) {
    if (this.chain.length > 0) {
      newBlock.previousHash = this.chain[this.chain.length - 1].hash;
    }
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    this.chain.push(newBlock);
  }
}
