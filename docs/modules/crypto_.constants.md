[bun-types](https://oven-sh.github.io/bun-types/README.md) / [Exports](https://oven-sh.github.io/bun-types/modules.md) / ["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md) / constants

# Namespace: constants

["crypto"](https://oven-sh.github.io/bun-types/modules/crypto_.md).constants

## Table of contents

### Variables

- [ALPN\_ENABLED](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#alpn_enabled)
- [DH\_CHECK\_P\_NOT\_PRIME](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#dh_check_p_not_prime)
- [DH\_CHECK\_P\_NOT\_SAFE\_PRIME](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#dh_check_p_not_safe_prime)
- [DH\_NOT\_SUITABLE\_GENERATOR](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#dh_not_suitable_generator)
- [DH\_UNABLE\_TO\_CHECK\_GENERATOR](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#dh_unable_to_check_generator)
- [ENGINE\_METHOD\_ALL](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#engine_method_all)
- [ENGINE\_METHOD\_CIPHERS](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#engine_method_ciphers)
- [ENGINE\_METHOD\_DH](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#engine_method_dh)
- [ENGINE\_METHOD\_DIGESTS](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#engine_method_digests)
- [ENGINE\_METHOD\_DSA](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#engine_method_dsa)
- [ENGINE\_METHOD\_EC](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#engine_method_ec)
- [ENGINE\_METHOD\_NONE](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#engine_method_none)
- [ENGINE\_METHOD\_PKEY\_ASN1\_METHS](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#engine_method_pkey_asn1_meths)
- [ENGINE\_METHOD\_PKEY\_METHS](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#engine_method_pkey_meths)
- [ENGINE\_METHOD\_RAND](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#engine_method_rand)
- [ENGINE\_METHOD\_RSA](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#engine_method_rsa)
- [OPENSSL\_VERSION\_NUMBER](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#openssl_version_number)
- [POINT\_CONVERSION\_COMPRESSED](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#point_conversion_compressed)
- [POINT\_CONVERSION\_HYBRID](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#point_conversion_hybrid)
- [POINT\_CONVERSION\_UNCOMPRESSED](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#point_conversion_uncompressed)
- [RSA\_NO\_PADDING](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#rsa_no_padding)
- [RSA\_PKCS1\_OAEP\_PADDING](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#rsa_pkcs1_oaep_padding)
- [RSA\_PKCS1\_PADDING](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#rsa_pkcs1_padding)
- [RSA\_PKCS1\_PSS\_PADDING](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#rsa_pkcs1_pss_padding)
- [RSA\_PSS\_SALTLEN\_AUTO](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#rsa_pss_saltlen_auto)
- [RSA\_PSS\_SALTLEN\_DIGEST](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#rsa_pss_saltlen_digest)
- [RSA\_PSS\_SALTLEN\_MAX\_SIGN](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#rsa_pss_saltlen_max_sign)
- [RSA\_SSLV23\_PADDING](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#rsa_sslv23_padding)
- [RSA\_X931\_PADDING](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#rsa_x931_padding)
- [SSL\_OP\_ALL](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_all)
- [SSL\_OP\_ALLOW\_UNSAFE\_LEGACY\_RENEGOTIATION](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_allow_unsafe_legacy_renegotiation)
- [SSL\_OP\_CIPHER\_SERVER\_PREFERENCE](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_cipher_server_preference)
- [SSL\_OP\_CISCO\_ANYCONNECT](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_cisco_anyconnect)
- [SSL\_OP\_COOKIE\_EXCHANGE](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_cookie_exchange)
- [SSL\_OP\_CRYPTOPRO\_TLSEXT\_BUG](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_cryptopro_tlsext_bug)
- [SSL\_OP\_DONT\_INSERT\_EMPTY\_FRAGMENTS](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_dont_insert_empty_fragments)
- [SSL\_OP\_EPHEMERAL\_RSA](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_ephemeral_rsa)
- [SSL\_OP\_LEGACY\_SERVER\_CONNECT](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_legacy_server_connect)
- [SSL\_OP\_MICROSOFT\_BIG\_SSLV3\_BUFFER](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_microsoft_big_sslv3_buffer)
- [SSL\_OP\_MICROSOFT\_SESS\_ID\_BUG](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_microsoft_sess_id_bug)
- [SSL\_OP\_MSIE\_SSLV2\_RSA\_PADDING](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_msie_sslv2_rsa_padding)
- [SSL\_OP\_NETSCAPE\_CA\_DN\_BUG](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_netscape_ca_dn_bug)
- [SSL\_OP\_NETSCAPE\_CHALLENGE\_BUG](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_netscape_challenge_bug)
- [SSL\_OP\_NETSCAPE\_DEMO\_CIPHER\_CHANGE\_BUG](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_netscape_demo_cipher_change_bug)
- [SSL\_OP\_NETSCAPE\_REUSE\_CIPHER\_CHANGE\_BUG](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_netscape_reuse_cipher_change_bug)
- [SSL\_OP\_NO\_COMPRESSION](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_no_compression)
- [SSL\_OP\_NO\_QUERY\_MTU](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_no_query_mtu)
- [SSL\_OP\_NO\_SESSION\_RESUMPTION\_ON\_RENEGOTIATION](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_no_session_resumption_on_renegotiation)
- [SSL\_OP\_NO\_SSLv2](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_no_sslv2)
- [SSL\_OP\_NO\_SSLv3](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_no_sslv3)
- [SSL\_OP\_NO\_TICKET](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_no_ticket)
- [SSL\_OP\_NO\_TLSv1](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_no_tlsv1)
- [SSL\_OP\_NO\_TLSv1\_1](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_no_tlsv1_1)
- [SSL\_OP\_NO\_TLSv1\_2](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_no_tlsv1_2)
- [SSL\_OP\_PKCS1\_CHECK\_1](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_pkcs1_check_1)
- [SSL\_OP\_PKCS1\_CHECK\_2](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_pkcs1_check_2)
- [SSL\_OP\_SINGLE\_DH\_USE](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_single_dh_use)
- [SSL\_OP\_SINGLE\_ECDH\_USE](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_single_ecdh_use)
- [SSL\_OP\_SSLEAY\_080\_CLIENT\_DH\_BUG](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_ssleay_080_client_dh_bug)
- [SSL\_OP\_SSLREF2\_REUSE\_CERT\_TYPE\_BUG](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_sslref2_reuse_cert_type_bug)
- [SSL\_OP\_TLS\_BLOCK\_PADDING\_BUG](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_tls_block_padding_bug)
- [SSL\_OP\_TLS\_D5\_BUG](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_tls_d5_bug)
- [SSL\_OP\_TLS\_ROLLBACK\_BUG](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#ssl_op_tls_rollback_bug)
- [defaultCipherList](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#defaultcipherlist)
- [defaultCoreCipherList](https://oven-sh.github.io/bun-types/modules/crypto_.constants.md#defaultcorecipherlist)

## Variables

### ALPN\_ENABLED

• `Const` **ALPN\_ENABLED**: `number`

___

### DH\_CHECK\_P\_NOT\_PRIME

• `Const` **DH\_CHECK\_P\_NOT\_PRIME**: `number`

___

### DH\_CHECK\_P\_NOT\_SAFE\_PRIME

• `Const` **DH\_CHECK\_P\_NOT\_SAFE\_PRIME**: `number`

___

### DH\_NOT\_SUITABLE\_GENERATOR

• `Const` **DH\_NOT\_SUITABLE\_GENERATOR**: `number`

___

### DH\_UNABLE\_TO\_CHECK\_GENERATOR

• `Const` **DH\_UNABLE\_TO\_CHECK\_GENERATOR**: `number`

___

### ENGINE\_METHOD\_ALL

• `Const` **ENGINE\_METHOD\_ALL**: `number`

___

### ENGINE\_METHOD\_CIPHERS

• `Const` **ENGINE\_METHOD\_CIPHERS**: `number`

___

### ENGINE\_METHOD\_DH

• `Const` **ENGINE\_METHOD\_DH**: `number`

___

### ENGINE\_METHOD\_DIGESTS

• `Const` **ENGINE\_METHOD\_DIGESTS**: `number`

___

### ENGINE\_METHOD\_DSA

• `Const` **ENGINE\_METHOD\_DSA**: `number`

___

### ENGINE\_METHOD\_EC

• `Const` **ENGINE\_METHOD\_EC**: `number`

___

### ENGINE\_METHOD\_NONE

• `Const` **ENGINE\_METHOD\_NONE**: `number`

___

### ENGINE\_METHOD\_PKEY\_ASN1\_METHS

• `Const` **ENGINE\_METHOD\_PKEY\_ASN1\_METHS**: `number`

___

### ENGINE\_METHOD\_PKEY\_METHS

• `Const` **ENGINE\_METHOD\_PKEY\_METHS**: `number`

___

### ENGINE\_METHOD\_RAND

• `Const` **ENGINE\_METHOD\_RAND**: `number`

___

### ENGINE\_METHOD\_RSA

• `Const` **ENGINE\_METHOD\_RSA**: `number`

___

### OPENSSL\_VERSION\_NUMBER

• `Const` **OPENSSL\_VERSION\_NUMBER**: `number`

___

### POINT\_CONVERSION\_COMPRESSED

• `Const` **POINT\_CONVERSION\_COMPRESSED**: `number`

___

### POINT\_CONVERSION\_HYBRID

• `Const` **POINT\_CONVERSION\_HYBRID**: `number`

___

### POINT\_CONVERSION\_UNCOMPRESSED

• `Const` **POINT\_CONVERSION\_UNCOMPRESSED**: `number`

___

### RSA\_NO\_PADDING

• `Const` **RSA\_NO\_PADDING**: `number`

___

### RSA\_PKCS1\_OAEP\_PADDING

• `Const` **RSA\_PKCS1\_OAEP\_PADDING**: `number`

___

### RSA\_PKCS1\_PADDING

• `Const` **RSA\_PKCS1\_PADDING**: `number`

___

### RSA\_PKCS1\_PSS\_PADDING

• `Const` **RSA\_PKCS1\_PSS\_PADDING**: `number`

___

### RSA\_PSS\_SALTLEN\_AUTO

• `Const` **RSA\_PSS\_SALTLEN\_AUTO**: `number`

Causes the salt length for RSA_PKCS1_PSS_PADDING to be determined automatically when verifying a signature.

___

### RSA\_PSS\_SALTLEN\_DIGEST

• `Const` **RSA\_PSS\_SALTLEN\_DIGEST**: `number`

Sets the salt length for RSA_PKCS1_PSS_PADDING to the digest size when signing or verifying.

___

### RSA\_PSS\_SALTLEN\_MAX\_SIGN

• `Const` **RSA\_PSS\_SALTLEN\_MAX\_SIGN**: `number`

Sets the salt length for RSA_PKCS1_PSS_PADDING to the maximum permissible value when signing data.

___

### RSA\_SSLV23\_PADDING

• `Const` **RSA\_SSLV23\_PADDING**: `number`

___

### RSA\_X931\_PADDING

• `Const` **RSA\_X931\_PADDING**: `number`

___

### SSL\_OP\_ALL

• `Const` **SSL\_OP\_ALL**: `number`

Applies multiple bug workarounds within OpenSSL. See https://www.openssl.org/docs/man1.0.2/ssl/SSL_CTX_set_options.html for detail.

___

### SSL\_OP\_ALLOW\_UNSAFE\_LEGACY\_RENEGOTIATION

• `Const` **SSL\_OP\_ALLOW\_UNSAFE\_LEGACY\_RENEGOTIATION**: `number`

Allows legacy insecure renegotiation between OpenSSL and unpatched clients or servers. See https://www.openssl.org/docs/man1.0.2/ssl/SSL_CTX_set_options.html.

___

### SSL\_OP\_CIPHER\_SERVER\_PREFERENCE

• `Const` **SSL\_OP\_CIPHER\_SERVER\_PREFERENCE**: `number`

Attempts to use the server's preferences instead of the client's when selecting a cipher. See https://www.openssl.org/docs/man1.0.2/ssl/SSL_CTX_set_options.html.

___

### SSL\_OP\_CISCO\_ANYCONNECT

• `Const` **SSL\_OP\_CISCO\_ANYCONNECT**: `number`

Instructs OpenSSL to use Cisco's "speshul" version of DTLS_BAD_VER.

___

### SSL\_OP\_COOKIE\_EXCHANGE

• `Const` **SSL\_OP\_COOKIE\_EXCHANGE**: `number`

Instructs OpenSSL to turn on cookie exchange.

___

### SSL\_OP\_CRYPTOPRO\_TLSEXT\_BUG

• `Const` **SSL\_OP\_CRYPTOPRO\_TLSEXT\_BUG**: `number`

Instructs OpenSSL to add server-hello extension from an early version of the cryptopro draft.

___

### SSL\_OP\_DONT\_INSERT\_EMPTY\_FRAGMENTS

• `Const` **SSL\_OP\_DONT\_INSERT\_EMPTY\_FRAGMENTS**: `number`

Instructs OpenSSL to disable a SSL 3.0/TLS 1.0 vulnerability workaround added in OpenSSL 0.9.6d.

___

### SSL\_OP\_EPHEMERAL\_RSA

• `Const` **SSL\_OP\_EPHEMERAL\_RSA**: `number`

Instructs OpenSSL to always use the tmp_rsa key when performing RSA operations.

___

### SSL\_OP\_LEGACY\_SERVER\_CONNECT

• `Const` **SSL\_OP\_LEGACY\_SERVER\_CONNECT**: `number`

Allows initial connection to servers that do not support RI.

___

### SSL\_OP\_MICROSOFT\_BIG\_SSLV3\_BUFFER

• `Const` **SSL\_OP\_MICROSOFT\_BIG\_SSLV3\_BUFFER**: `number`

___

### SSL\_OP\_MICROSOFT\_SESS\_ID\_BUG

• `Const` **SSL\_OP\_MICROSOFT\_SESS\_ID\_BUG**: `number`

___

### SSL\_OP\_MSIE\_SSLV2\_RSA\_PADDING

• `Const` **SSL\_OP\_MSIE\_SSLV2\_RSA\_PADDING**: `number`

Instructs OpenSSL to disable the workaround for a man-in-the-middle protocol-version vulnerability in the SSL 2.0 server implementation.

___

### SSL\_OP\_NETSCAPE\_CA\_DN\_BUG

• `Const` **SSL\_OP\_NETSCAPE\_CA\_DN\_BUG**: `number`

___

### SSL\_OP\_NETSCAPE\_CHALLENGE\_BUG

• `Const` **SSL\_OP\_NETSCAPE\_CHALLENGE\_BUG**: `number`

___

### SSL\_OP\_NETSCAPE\_DEMO\_CIPHER\_CHANGE\_BUG

• `Const` **SSL\_OP\_NETSCAPE\_DEMO\_CIPHER\_CHANGE\_BUG**: `number`

___

### SSL\_OP\_NETSCAPE\_REUSE\_CIPHER\_CHANGE\_BUG

• `Const` **SSL\_OP\_NETSCAPE\_REUSE\_CIPHER\_CHANGE\_BUG**: `number`

___

### SSL\_OP\_NO\_COMPRESSION

• `Const` **SSL\_OP\_NO\_COMPRESSION**: `number`

Instructs OpenSSL to disable support for SSL/TLS compression.

___

### SSL\_OP\_NO\_QUERY\_MTU

• `Const` **SSL\_OP\_NO\_QUERY\_MTU**: `number`

___

### SSL\_OP\_NO\_SESSION\_RESUMPTION\_ON\_RENEGOTIATION

• `Const` **SSL\_OP\_NO\_SESSION\_RESUMPTION\_ON\_RENEGOTIATION**: `number`

Instructs OpenSSL to always start a new session when performing renegotiation.

___

### SSL\_OP\_NO\_SSLv2

• `Const` **SSL\_OP\_NO\_SSLv2**: `number`

___

### SSL\_OP\_NO\_SSLv3

• `Const` **SSL\_OP\_NO\_SSLv3**: `number`

___

### SSL\_OP\_NO\_TICKET

• `Const` **SSL\_OP\_NO\_TICKET**: `number`

___

### SSL\_OP\_NO\_TLSv1

• `Const` **SSL\_OP\_NO\_TLSv1**: `number`

___

### SSL\_OP\_NO\_TLSv1\_1

• `Const` **SSL\_OP\_NO\_TLSv1\_1**: `number`

___

### SSL\_OP\_NO\_TLSv1\_2

• `Const` **SSL\_OP\_NO\_TLSv1\_2**: `number`

___

### SSL\_OP\_PKCS1\_CHECK\_1

• `Const` **SSL\_OP\_PKCS1\_CHECK\_1**: `number`

___

### SSL\_OP\_PKCS1\_CHECK\_2

• `Const` **SSL\_OP\_PKCS1\_CHECK\_2**: `number`

___

### SSL\_OP\_SINGLE\_DH\_USE

• `Const` **SSL\_OP\_SINGLE\_DH\_USE**: `number`

Instructs OpenSSL to always create a new key when using temporary/ephemeral DH parameters.

___

### SSL\_OP\_SINGLE\_ECDH\_USE

• `Const` **SSL\_OP\_SINGLE\_ECDH\_USE**: `number`

Instructs OpenSSL to always create a new key when using temporary/ephemeral ECDH parameters.

___

### SSL\_OP\_SSLEAY\_080\_CLIENT\_DH\_BUG

• `Const` **SSL\_OP\_SSLEAY\_080\_CLIENT\_DH\_BUG**: `number`

___

### SSL\_OP\_SSLREF2\_REUSE\_CERT\_TYPE\_BUG

• `Const` **SSL\_OP\_SSLREF2\_REUSE\_CERT\_TYPE\_BUG**: `number`

___

### SSL\_OP\_TLS\_BLOCK\_PADDING\_BUG

• `Const` **SSL\_OP\_TLS\_BLOCK\_PADDING\_BUG**: `number`

___

### SSL\_OP\_TLS\_D5\_BUG

• `Const` **SSL\_OP\_TLS\_D5\_BUG**: `number`

___

### SSL\_OP\_TLS\_ROLLBACK\_BUG

• `Const` **SSL\_OP\_TLS\_ROLLBACK\_BUG**: `number`

Instructs OpenSSL to disable version rollback attack detection.

___

### defaultCipherList

• `Const` **defaultCipherList**: `string`

Specifies the active default cipher list used by the current Node.js process  (colon-separated values).

___

### defaultCoreCipherList

• `Const` **defaultCoreCipherList**: `string`

Specifies the built-in default cipher list used by Node.js (colon-separated values).
