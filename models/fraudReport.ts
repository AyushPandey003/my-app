import mongoose from "mongoose";

const fraudReportSchema = new mongoose.Schema(
  {
    suspiciousEntity: { type: String, required: true },
    description: { type: String, required: true },
    fraudLikelihood: { type: Number, required: true },
    reportedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const FraudReport = mongoose.models.FraudReport || mongoose.model("FraudReport", fraudReportSchema);

export default FraudReport;
