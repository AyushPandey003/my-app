interface TaxSlab {
  lowerLimit: number;
  upperLimit: number;
  rate: number;
}

interface OtherFactors {
  specialDeductions?: number;
}

export const getTaxSlabs = (income: number, deductions: number, taxSlabs: TaxSlab[], otherFactors: OtherFactors) => {
    let taxableIncome = income - deductions;
  
    // Apply any other factors (like special deductions, exemptions)
    taxableIncome -= otherFactors.specialDeductions || 0;
  
    // Calculate tax based on slabs
    let tax = 0;
    for (const slab of taxSlabs) {
      if (taxableIncome > slab.lowerLimit) {
        const taxableAmountInSlab = Math.min(taxableIncome - slab.lowerLimit, slab.upperLimit - slab.lowerLimit);
        tax += taxableAmountInSlab * slab.rate;
      }
    }
  
    return tax;
  };
  