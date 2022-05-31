const cql = require('D:/projects/cql/cql-execution/lib/cql');
const measure = require('D:/Github/cql-execution/examples/node/age.json');

const lib = new cql.Library(measure);
const executor = new cql.Executor(lib);
const psource = new cql.PatientSource([ {
  'id' : '1',
  'resourceType' : 'Patient',
  'name': 'John Smith',
  'gender': 'M',
  'birthDate' : '1980-02-17T06:15'
}, {
  'id' : '2',
  'resourceType' : 'Patient',
  'name': 'Sally Smith',
  'gender': 'F',
  'birthDate' : '2007-08-02T11:47'
} ]);

const result = executor.exec(psource);
console.log(JSON.stringify(result, undefined, 2));
