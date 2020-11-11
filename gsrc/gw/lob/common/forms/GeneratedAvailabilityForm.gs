package gw.lob.common.forms

uses gw.forms.generic.AbstractSimpleAvailabilityForm
uses gw.lob.common.parameters.Parameters

abstract class GeneratedAvailabilityForm extends AbstractSimpleAvailabilityForm {
  var _parameters: Parameters as Parameters = new Parameters ()
}