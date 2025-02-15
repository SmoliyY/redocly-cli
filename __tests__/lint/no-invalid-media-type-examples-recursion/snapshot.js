// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint no-invalid-media-type-examples-recursion 1`] = `

validating /openapi.json...
[1] openapi.json:27:28 at #/paths/~1test/get/responses/202/content/application~1json/example

Example value must conform to the schema: must have required property 'c'.

25 |   "application/json": {
26 |     "schema": { "$ref": "#/components/schemas/PetWithProps" },
27 |     "example": {
   |                ^
28 |       "a": {
   |       ^^^^^^
 … |       < 4 more lines >
33 |     }
   |     ^
34 |   }
35 | }

referenced from openapi.json:25:35 at #/paths/~1test/get/responses/202/content/application~1json 

Warning was generated by the no-invalid-media-type-examples rule.


[2] openapi.json:28:24 at #/paths/~1test/get/responses/202/content/application~1json/example/a

Example value must conform to the schema: \`a\` property must have required property 'c'.

26 | "schema": { "$ref": "#/components/schemas/PetWithProps" },
27 | "example": {
28 |   "a": {
   |        ^
29 |   },
   |   ^
30 |   "b": {
31 |     "c": "hello"

referenced from openapi.json:25:35 at #/paths/~1test/get/responses/202/content/application~1json 

Warning was generated by the no-invalid-media-type-examples rule.


/openapi.json: validated in <test>ms

Woohoo! Your OpenAPI definition is valid. 🎉
You have 2 warnings.


`;
