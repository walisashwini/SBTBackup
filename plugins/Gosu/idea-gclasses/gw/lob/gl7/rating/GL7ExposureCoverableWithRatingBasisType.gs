package gw.lob.gl7.rating

uses gw.rating.AbstractCoverableWithRatingBasisType

class GL7ExposureCoverableWithRatingBasisType extends AbstractCoverableWithRatingBasisType <GL7Exposure, GL7RatingBasisTypeProvider> {

  private var _owner: GL7Exposure
  private var _ratingBasisTypeProvider: GL7RatingBasisTypeProvider

  construct(owner: GL7Exposure) {
    _owner = owner
    _ratingBasisTypeProvider = GL7RatingBasisTypeProvider.Instance
  }

  override property get OwningCoverable(): GL7Exposure {
    return _owner
  }

  override property get BasisTypeFromCoverable(): String {
    return _owner.DomainModel.PremiumBasis
  }

  override property get RatingBasisTypeProvider(): GL7RatingBasisTypeProvider {
    return _ratingBasisTypeProvider
  }

}