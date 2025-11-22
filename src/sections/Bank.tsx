'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BRIDE_GROOM_INFO } from '@/constants/weddingInfo';
import ScrollFadeIn from '@/components/ScrollFadeIn';

const title = '마음 전하실 곳';

interface BankAccountProps {
  label: string;
  name: string;
  bankName?: string;
  accountNumber?: string;
  accountHolder?: string;
}

const BankAccount = ({
  label,
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
    <div className="flex items-center justify-between p-3 last:pb-0 border-b last:border-b-0 border-[var(--color-line)]">
      <div className="flex-1">
        <p className="text-sm mb-1" style={{ textAlign: 'left' }}>
          <span className="font-medium text-[var(--color-primary)]">
            {label}
          </span>{' '}
          <span className="text-[var(--text-main)]">{name}</span>
        </p>
        <p
          className="text-xs text-[var(--text-sub)]"
          style={{ textAlign: 'left' }}
        >
          {bankName} {accountNumber}
        </p>
      </div>
      <div className="flex items-center gap-2 ml-4 flex-shrink-0">
        <div className="flex flex-col items-center gap-1">
          <button
            className="flex flex-col items-center justify-center gap-1 w-12 h-12 rounded-full"
            style={{ backgroundColor: '#fee500' }}
            aria-label="카카오페이로 송금하기"
          >
            <Image
              src="/copy.svg"
              alt=""
              width={14}
              height={14}
              style={{ opacity: 0.7 }}
            />
            <span className="text-xs font-medium" style={{ color: '#3c1e1e' }}>
              pay
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={handleCopy}
            className="flex flex-col items-center justify-center gap-1 w-12 h-12 rounded-full transition-colors"
            style={{
              backgroundColor: copied
                ? 'var(--color-green)'
                : 'var(--color-secondary)',
            }}
            aria-label={`${label} ${name} 계좌번호 복사`}
          >
            <Image src="/copy.svg" alt="" width={14} height={14} />
            <span className="text-xs" style={{ color: 'var(--text-main)' }}>
              복사
            </span>
          </button>
        </div>
      </div>
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
        <div className="p-0 overflow-hidden rounded-md">
          <button
            onClick={() => setGroomOpen(!groomOpen)}
            className="w-full flex items-center justify-between text-left p-4 bg-[var(--color-secondary)] rounded-t-md"
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

          <div
            id="groom-accounts"
            className="overflow-hidden transition-all duration-800 ease-in-out border-x border-b border-[var(--color-line)] rounded-b-md"
            style={{
              maxHeight: groomOpen ? '500px' : '0',
              opacity: groomOpen ? 1 : 0,
            }}
          >
            <div className="px-3 pb-6 space-y-2">
              <BankAccount
                label="신랑"
                name={BRIDE_GROOM_INFO.groom.name}
                bankName={BRIDE_GROOM_INFO.groom.bankName}
                accountNumber={BRIDE_GROOM_INFO.groom.accountNumber}
                accountHolder={BRIDE_GROOM_INFO.groom.accountHolder}
              />
              <BankAccount
                label="아버지"
                name={BRIDE_GROOM_INFO.groomParents.father.name}
                bankName={BRIDE_GROOM_INFO.groomParents.father.bankName}
                accountNumber={
                  BRIDE_GROOM_INFO.groomParents.father.accountNumber
                }
                accountHolder={
                  BRIDE_GROOM_INFO.groomParents.father.accountHolder
                }
              />
              <BankAccount
                label="어머니"
                name={BRIDE_GROOM_INFO.groomParents.mother.name}
                bankName={BRIDE_GROOM_INFO.groomParents.mother.bankName}
                accountNumber={
                  BRIDE_GROOM_INFO.groomParents.mother.accountNumber
                }
                accountHolder={
                  BRIDE_GROOM_INFO.groomParents.mother.accountHolder
                }
              />
            </div>
          </div>
        </div>

        {/* 신부측 */}
        <div className="p-0 overflow-hidden rounded-md">
          <button
            onClick={() => setBrideOpen(!brideOpen)}
            className="w-full flex items-center justify-between text-left p-4 bg-[var(--color-secondary)] rounded-t-md"
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

          <div
            id="bride-accounts"
            className="overflow-hidden transition-all duration-800 ease-in-out border-x border-b border-[var(--color-line)] rounded-b-md"
            style={{
              maxHeight: brideOpen ? '500px' : '0',
              opacity: brideOpen ? 1 : 0,
            }}
          >
            <div className="px-3 pb-6 space-y-2">
              <BankAccount
                label="신부"
                name={BRIDE_GROOM_INFO.bride.name}
                bankName={BRIDE_GROOM_INFO.bride.bankName}
                accountNumber={BRIDE_GROOM_INFO.bride.accountNumber}
                accountHolder={BRIDE_GROOM_INFO.bride.accountHolder}
              />
              <BankAccount
                label="아버지"
                name={BRIDE_GROOM_INFO.brideParents.father.name}
                bankName={BRIDE_GROOM_INFO.brideParents.father.bankName}
                accountNumber={
                  BRIDE_GROOM_INFO.brideParents.father.accountNumber
                }
                accountHolder={
                  BRIDE_GROOM_INFO.brideParents.father.accountHolder
                }
              />
              <BankAccount
                label="어머니"
                name={BRIDE_GROOM_INFO.brideParents.mother.name}
                bankName={BRIDE_GROOM_INFO.brideParents.mother.bankName}
                accountNumber={
                  BRIDE_GROOM_INFO.brideParents.mother.accountNumber
                }
                accountHolder={
                  BRIDE_GROOM_INFO.brideParents.mother.accountHolder
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
