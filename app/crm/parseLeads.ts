import fs from "node:fs";
import path from "node:path";

export type LeadRecord = {
  id: string;
  businessName: string;
  category: string;
  subcategory: string;
  location: string;
  website: string;
  contactName: string;
  role: string;
  email: string;
  phone: string;
  offerSummary: string;
  fitSignals: string;
  painAngle: string;
  source1: string;
  source2: string;
  priority: string;
  contactStatus: string;
  lastContacted: string;
  followUpDue: string;
  readyToOutreach: string;
  notes: string;
};

const filePath = path.join(process.cwd(), "app", "crm", "leads.tsv");

function getValue(parts: string[], index: number) {
  return (parts[index] ?? "").trim();
}

export function getLeadRecords(): LeadRecord[] {
  const raw = fs.readFileSync(filePath, "utf8").trim();
  const rows = raw.split(/\r?\n/);
  const data = rows.slice(1);

  return data
    .map((line) => line.split("\t"))
    .filter((parts) => getValue(parts, 1))
    .map((parts) => ({
      id: getValue(parts, 0),
      businessName: getValue(parts, 1),
      category: getValue(parts, 2),
      subcategory: getValue(parts, 3),
      location: getValue(parts, 4),
      website: getValue(parts, 5),
      contactName: getValue(parts, 6),
      role: getValue(parts, 7),
      email: getValue(parts, 8),
      phone: getValue(parts, 9),
      offerSummary: getValue(parts, 10),
      fitSignals: getValue(parts, 11),
      painAngle: getValue(parts, 12),
      source1: getValue(parts, 13),
      source2: getValue(parts, 14),
      priority: getValue(parts, 15),
      contactStatus: getValue(parts, 16),
      lastContacted: getValue(parts, 17),
      followUpDue: getValue(parts, 18),
      readyToOutreach: getValue(parts, 19),
      notes: getValue(parts, 20),
    }));
}
