/**
 * params.js
 */

export const hashes: {
  [index: string]: { nodeName: string, hashSize: number, maxInput: number }
} = {
  // maxInput: 2^maxInput - 1 octets
  'SHA-256': {nodeName: 'sha256', hashSize: 32, maxInput: 61},
  'SHA-384': {nodeName: 'sha384', hashSize: 48, maxInput: 125},
  'SHA-512': {nodeName: 'sha512', hashSize: 64, maxInput: 125},
  'SHA-1': {nodeName: 'sha1', hashSize: 20, maxInput: 61},
};
