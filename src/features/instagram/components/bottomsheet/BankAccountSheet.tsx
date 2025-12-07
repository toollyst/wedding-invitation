'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BRIDE_GROOM_INFO } from '@/constants/weddingInfo';
import { BottomSheet } from './BottomSheet';

interface BankAccountCardProps {
  label: string;
  name: string;
  bankName?: string;
  accountNumber?: string;
}

const BankAccountCard = ({
  label,
  name,
  bankName,
  accountNumber,
}: BankAccountCardProps) => {
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
    <div
      className="p-4 rounded-lg mb-3"
      style={{ background: 'var(--ig-bg-secondary)' }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p
            className="text-xs font-medium mb-1 text-left"
            style={{ color: 'var(--ig-text-secondary)' }}
          >
            {label}
          </p>
          <p
            className="text-sm font-semibold mb-1 text-left"
            style={{ color: 'var(--ig-text-primary)' }}
          >
            {bankName} {accountNumber}
          </p>
          <p
            className="text-sm text-left"
            style={{ color: 'var(--ig-text-primary)' }}
          >
            {name}
          </p>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-3 py-2 rounded-md transition-colors"
          style={{
            background: 'var(--ig-bg-primary)',
            border: '1px solid var(--ig-border)',
          }}
          aria-label={`${name} 계좌번호 복사`}
        >
          <Image
            src={copied ? '/check.svg' : '/copy.svg'}
            alt=""
            width={14}
            height={14}
          />
          <span
            className="text-xs font-medium"
            style={{ color: 'var(--ig-text-primary)' }}
          >
            {copied ? '복사됨' : '복사'}
          </span>
        </button>
      </div>
    </div>
  );
};

interface BankAccountSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BankAccountSheet = ({
  isOpen,
  onClose,
}: BankAccountSheetProps) => {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} title="마음 전하실곳 💐">
      <div className="space-y-6">
        {/* 신랑측 */}
        <div>
          <h3
            className="text-sm font-semibold mb-3 text-left"
            style={{ color: 'var(--ig-text-primary)' }}
          >
            신랑측
          </h3>
          <BankAccountCard
            label="신랑"
            name={BRIDE_GROOM_INFO.groom.name}
            bankName={BRIDE_GROOM_INFO.groom.bankName}
            accountNumber={BRIDE_GROOM_INFO.groom.accountNumber}
          />
          <BankAccountCard
            label="신랑 아버지"
            name={BRIDE_GROOM_INFO.groomParents.father.name}
            bankName={BRIDE_GROOM_INFO.groomParents.father.bankName}
            accountNumber={BRIDE_GROOM_INFO.groomParents.father.accountNumber}
          />
          <BankAccountCard
            label="신랑 어머니"
            name={BRIDE_GROOM_INFO.groomParents.mother.name}
            bankName={BRIDE_GROOM_INFO.groomParents.mother.bankName}
            accountNumber={BRIDE_GROOM_INFO.groomParents.mother.accountNumber}
          />
        </div>

        {/* 신부측 */}
        <div>
          <h3
            className="text-sm font-semibold mb-3 text-left"
            style={{ color: 'var(--ig-text-primary)' }}
          >
            신부측
          </h3>
          <BankAccountCard
            label="신부"
            name={BRIDE_GROOM_INFO.bride.name}
            bankName={BRIDE_GROOM_INFO.bride.bankName}
            accountNumber={BRIDE_GROOM_INFO.bride.accountNumber}
          />
          <BankAccountCard
            label="신부 아버지"
            name={BRIDE_GROOM_INFO.brideParents.father.name}
            bankName={BRIDE_GROOM_INFO.brideParents.father.bankName}
            accountNumber={BRIDE_GROOM_INFO.brideParents.father.accountNumber}
          />
          <BankAccountCard
            label="신부 어머니"
            name={BRIDE_GROOM_INFO.brideParents.mother.name}
            bankName={BRIDE_GROOM_INFO.brideParents.mother.bankName}
            accountNumber={BRIDE_GROOM_INFO.brideParents.mother.accountNumber}
          />
        </div>
      </div>
    </BottomSheet>
  );
};
