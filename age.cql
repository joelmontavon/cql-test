using FHIR version '4.0.1'

parameter "Measurement Period" default Interval[DateTime(2013, 1, 1, 0, 0, 0, 0), DateTime(2014, 1, 1, 0, 0, 0, 0))

context Patient

define "Age Range":
  AgeInYearsAt(start of "Measurement Period")>= 40
                                and AgeInYearsAt(start of "Measurement Period")<= 75