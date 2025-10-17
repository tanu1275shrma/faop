import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const Curriculum = () => {
  const [openQBO, setOpenQBO] = useState(1);
  const [openXero, setOpenXero] = useState(1);

  const qboTopics = [
    {
      id: 1,
      title: "1. Chart of Accounts Setup & Custom Books",
      content:
        "Learn how to create and organize accounts for various business types. Understand categories like income, expenses, assets, liabilities, and equity. Customize books based on client-specific needs.",
    },
    {
      id: 2,
      title: "2. Opening Balances & Trial Balance",
      content:
        "How to input historical data when onboarding new clients and reconcile opening balances. Preparation and interpretation of a trial balance to ensure books are accurate.",
    },
    {
      id: 3,
      title: "3. Transaction Recording & Journal Entries",
      content:
        "Record day-to-day transactions such as sales, purchases, and expenses. Learn manual journal entries to correct or adjust accounting errors.",
    },
    {
      id: 4,
      title: "4. Bank Reconciliation",
      content:
        "Match bank transactions with recorded entries in QuickBooks. Identify discrepancies, missing entries, or bank charges to ensure cash book accuracy.",
    },
    {
      id: 5,
      title: "5. Accounts Receivable & Payable",
      content:
        "Manage client receivables: Create and send invoices, follow up on overdue payments. Handle payables: Record bills, track due dates, and schedule payments.",
    },
    {
      id: 6,
      title: "6. Invoice & Bill Generation",
      content:
        "Automate and customize invoices/bills with tax fields, payment terms, and branding. Link these with customer/vendor ledgers for real-time tracking.",
    },
    {
      id: 7,
      title: "7. Financial Reports",
      content:
        "MGenerate and analyze core financial reports: 1.Balance Sheet – Understand financial position (Assets = Liabilities + Equity)2. Profit & Loss (P&L) – Analyze revenue, expenses, and net income. 3.Ageing Analysis – Track overdue invoices and bills to improve cash flow.",
    },
    {
      id: 8,
      title: "8. Financial Statement Preparation",
      content: "Toggle Content.",
    },
  ];

  const xeroTopics = [
    {
      id: 1,
      title: "1. Client Setup & Company Creation",
      content:
        "Create a new organization in Xero, set currency, tax defaults, and financial year. Input business details and connect bank feeds.",
    },
    {
      id: 2,
      title: "2. Balance Conversion & Chart of Accounts",
      content:
        "Transfer existing client balances from Excel or other software. Import or customize the chart of accounts suitable for various industries.",
    },
    {
      id: 3,
      title: "3. Bank Rules & Ledger Management",
      content:
        "Automate transactions using Xero’s smart rules and manage ledgers effectively.",
    },
    {
      id: 4,
      title: "4. Journal Entries",
      content:
        "Manual journal posting for adjustments, accruals, and corrections. Learn about tracking categories and tracking for departmental reports.",
    },
    {
      id: 5,
      title: "5. Asset Addition & Depreciation",
      content:
        "Use Xero’s fixed asset module to add and track business assets. Automate monthly depreciation and understand asset disposal procedures.",
    },
    {
      id: 6,
      title: "6. Bank Reconciliation",
      content:
        "Perform daily or weekly bank reconciliation to ensure books match real-time cash flow. Handle unmatched transactions and reconciliation errors.",
    },
    {
      id: 7,
      title: "7. GST, VAT & Indirect Tax",
      content:
        "Set up tax rates (e.g., GST in Australia, VAT in the UK), apply correct tax codes, file returns, and handle tax payments/refunds.",
    },
    {
      id: 8,
      title: "8. Financial Statement Preparation",
      content:
        "Compile complete financial statements:1.Balance Sheet 2.Profit & Loss 3.Statement of Cash Flows 4.Management Reports (KPIs, Budget vs Actual, etc.).",
    },
  ];

  return (
    <section className="bg-[#F9C744] text-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-center mb-12 bg-white bg-clip-text text-transparent"
        >
          <span className="text-blue-950"> Course Curriculum</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* QBO Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#11243a] rounded-2xl p-6 shadow-xl border border-[#1d3a5b] hover:shadow-[0_0_25px_#ffc10755] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
              QuickBooks Online (QBO) Learning Manual
            </h3>

            {qboTopics.map((item) => (
              <div
                key={item.id}
                className="mb-4 border border-[#243b52] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenQBO(openQBO === item.id ? null : item.id)
                  }
                  className="w-full flex justify-between items-center px-4 py-3 bg-[#132c47] hover:bg-[#183a5d] transition-all"
                >
                  <span className="text-sm md:text-base font-medium text-white">
                    {item.title}
                  </span>
                  {openQBO === item.id ? (
                    <ChevronUp className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-yellow-400" />
                  )}
                </button>

                <AnimatePresence>
                  {openQBO === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#ffffff] text-blue-950 text-sm p-4 leading-relaxed"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* Xero Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#11243a] rounded-2xl p-6 shadow-xl border border-[#1d3a5b] hover:shadow-[0_0_25px_#ffc10755] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
              Xero Accounting (Xero) Learning Manual
            </h3>

            {xeroTopics.map((item) => (
              <div
                key={item.id}
                className="mb-4 border border-[#243b52] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenXero(openXero === item.id ? null : item.id)
                  }
                  className="w-full flex justify-between items-center px-4 py-3 bg-[#132c47] hover:bg-[#183a5d] transition-all"
                >
                  <span className="text-sm md:text-base font-medium text-white">
                    {item.title}
                  </span>
                  {openXero === item.id ? (
                    <ChevronUp className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-yellow-400" />
                  )}
                </button>

                <AnimatePresence>
                  {openXero === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white text-blue-950 text-sm p-4 leading-relaxed"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
