# HDPS language source snapshot

The four language books are stored directly in this repository for runtime independence.

- Korean: hd-08 pinned blobs
- English: hd-12 pinned blobs
- Portuguese: hd-13 pinned blobs
- Simplified Chinese: hd-14 pinned blobs

Final QA patches in hd-18 remove the header logo, normalize the library-return control, fix headline highlight scope, add access-event hooks, and apply mobile overflow safeguards.

## National flag assets

- Source: hampusborgos/country-flags (accurate SVG renders derived from Wikimedia Commons and national flag specifications)
- Included: South Korea, India, Brazil, Norway, and China
- The source repository identifies national flags as public-domain works; the SVG files are vendored locally to preserve accuracy and runtime reliability.
