package gw.rating

uses java.util.Date

interface RatingBasisTypeProvider {

  function getRatingBasisType(basisType: String, date: Date): RatingBasisType

}