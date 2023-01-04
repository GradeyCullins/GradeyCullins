export type RsaAlg = 'RSASSA-PKCS1-v1_5' | 'RSA-PSS' | 'RSA-OAEP'
export type RsaLen = 2048 | 4096 | 8192
export type RsaHash = 'SHA-256' | 'SHA-384' | 'SHA-512'
export type EccAlg = 'ECDSA' | 'ECDH'
export type EccCurve = 'P-256' | 'P-384' | 'P-521'

export const generateRSAKeyPair = async (
  name: RsaAlg, len: RsaLen, hash: RsaHash
): Promise<CryptoKeyPair> => {
  return await window.crypto.subtle.generateKey(
    {
      name,
      modulusLength: len,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash
    },
    true,
    ['sign', 'verify']
  )
}

export const generateECCKeyPair = async (
  name: EccAlg, // 'ECDH' does not seem to work
  curve: EccCurve
): Promise<CryptoKeyPair> => {
  return await window.crypto.subtle.generateKey(
    {
      name,
      namedCurve: curve
    },
    true,
    ['sign', 'verify']
  )
}

/**
 * Export the given public/private RSA/ECC key in PEM-encoded format
 * @param {CryptoKey} key - the public or private key from an RSA/ECC keypair
 * @returns {Promise<string>} the PEM-encoded key export as a string
 */
export const exportKey = async (key: CryptoKey): Promise<string> => {
  const ab = await crypto.subtle.exportKey(key.type === 'public' ? 'spki' : 'pkcs8', key)
  const strKey = ab2str(ab)
  const b64key = window.btoa(strKey)
  const upperType = key.type.toUpperCase()
  return `-----BEGIN ${upperType} KEY-----\n${b64key}\n-----END ${upperType} KEY-----`
}

/**
 * Convert  an ArrayBuffer into a string
 * from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
 * source: https://github.com/mdn/dom-examples/blob/master/web-crypto/export-key/pkcs8.js#L7-L9
 * @param {ArrayBuffer} buf - an array buffer of the public/private RSA key
*/
function ab2str (buf: ArrayBuffer): string {
  return String.fromCharCode.apply(null, (new Uint8Array(buf) as unknown) as number[])
}
