'use client';

import { useState } from 'react';
import { BRIDE_GROOM_INFO } from '@/constants/weddingInfo';
import ScrollFadeIn from '@/components/ScrollFadeIn';

const title = '마음 전하실 곳';

interface BankAccountProps {
  name: string;
  bankName?: string;
  accountNumber?: string;
  accountHolder?: string;
}

const BankAccount = ({
  name,
  bankName,
  accountNumber,
  accountHolder,
}: BankAccountProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (accountNumber) {
      try {
        await navigator.clipboard.writeText(accountNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('복사 실패:', err);
      }
    }
  };

  if (!bankName || !accountNumber) {
    return null;
  }

  return (
    <div className="flex items-center justify-between py-2 border-b last:border-b-0 border-[var(--color-line)]">
      <div className="text-left flex-1">
        <p className="text-sm font-medium mb-1">{name}</p>
        <p className="text-xs text-[var(--text-sub)]">
          {bankName} {accountNumber}
        </p>
        {accountHolder && (
          <p className="text-xs text-[var(--text-sub)]">예금주: {accountHolder}</p>
        )}
      </div>
      <button
        onClick={handleCopy}
        className="ml-4 px-3 py-1 text-xs rounded-md transition-colors"
        style={{
          backgroundColor: copied
            ? 'var(--color-green)'
            : 'var(--color-secondary)',
          color: 'var(--text-main)',
        }}
        aria-label={`${name} 계좌번호 복사`}
      >
        {copied ? '복사됨' : '복사'}
      </button>
    </div>
  );
};

const Bank = () => {
  const [groomOpen, setGroomOpen] = useState(false);
  const [brideOpen, setBrideOpen] = useState(false);

  return (
    <div className="flex flex-col items-center px-8 py-10">
      <ScrollFadeIn>
        <h3>{title}</h3>
      </ScrollFadeIn>

      <div className="w-full max-w-md space-y-4 mt-6">
        {/* 신랑측 */}
        <div className="wedding-card">
          <button
            onClick={() => setGroomOpen(!groomOpen)}
            className="w-full flex items-center justify-between text-left"
            aria-expanded={groomOpen}
            aria-controls="groom-accounts"
          >
            <span className="font-medium text-[var(--text-main)]">신랑측</span>
            <span
              className="transform transition-transform"
              style={{ transform: groomOpen ? 'rotate(180deg)' : 'rotate(0)' }}
            >
              ▼
            </span>
          </button>

          {groomOpen && (
            <div id="groom-accounts" className="mt-4 space-y-2">
              <BankAccount
                name={`신랑 ${BRIDE_GROOM_INFO.groom.name}`}
                bankName={BRIDE_GROOM_INFO.groom.bankName}
                accountNumber={BRIDE_GROOM_INFO.groom.accountNumber}
                accountHolder={BRIDE_GROOM_INFO.groom.accountHolder}
              />
              <BankAccount
                name={`아버지 ${BRIDE_GROOM_INFO.groomParents.father.name}`}
                bankName={BRIDE_GROOM_INFO.groomParents.father.bankName}
                accountNumber={BRIDE_GROOM_INFO.groomParents.father.accountNumber}
                accountHolder={BRIDE_GROOM_INFO.groomParents.father.accountHolder}
              />
              <BankAccount
                name={`어머니 ${BRIDE_GROOM_INFO.groomParents.mother.name}`}
                bankName={BRIDE_GROOM_INFO.groomParents.mother.bankName}
                accountNumber={BRIDE_GROOM_INFO.groomParents.mother.accountNumber}
                accountHolder={BRIDE_GROOM_INFO.groomParents.mother.accountHolder}
              />
            </div>
          )}
        </div>

        {/* 신부측 */}
        <div className="wedding-card">
          <button
            onClick={() => setBrideOpen(!brideOpen)}
            className="w-full flex items-center justify-between text-left"
            aria-expanded={brideOpen}
            aria-controls="bride-accounts"
          >
            <span className="font-medium text-[var(--text-main)]">신부측</span>
            <span
              className="transform transition-transform"
              style={{ transform: brideOpen ? 'rotate(180deg)' : 'rotate(0)' }}
            >
              ▼
            </span>
          </button>

          {brideOpen && (
            <div id="bride-accounts" className="mt-4 space-y-2">
              <BankAccount
                name={`신부 ${BRIDE_GROOM_INFO.bride.name}`}
                bankName={BRIDE_GROOM_INFO.bride.bankName}
                accountNumber={BRIDE_GROOM_INFO.bride.accountNumber}
                accountHolder={BRIDE_GROOM_INFO.bride.accountHolder}
              />
              <BankAccount
                name={`아버지 ${BRIDE_GROOM_INFO.brideParents.father.name}`}
                bankName={BRIDE_GROOM_INFO.brideParents.father.bankName}
                accountNumber={BRIDE_GROOM_INFO.brideParents.father.accountNumber}
                accountHolder={BRIDE_GROOM_INFO.brideParents.father.accountHolder}
              />
              <BankAccount
                name={`어머니 ${BRIDE_GROOM_INFO.brideParents.mother.name}`}
                bankName={BRIDE_GROOM_INFO.brideParents.mother.bankName}
                accountNumber={BRIDE_GROOM_INFO.brideParents.mother.accountNumber}
                accountHolder={BRIDE_GROOM_INFO.brideParents.mother.accountHolder}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bank;
