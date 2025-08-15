'use client';
import { useTranslation } from 'app/i18n/client';
import React, { useEffect, useState } from 'react';
import { useLang } from 'stores/langStore';
// import { useSubmit } from 'stores/submitStore';

export default function TeamRolesContainer({
  roles,
  onRoleSelect
}: {
  roles: string[];
  onRoleSelect: (role: string) => void;
}) {
  // const {selectedRole, updateRole} = useSubmit();

  const { lang } = useLang();

  const { t } = useTranslation(lang, "ourTeam");

  const [selectedRole, setSelectedRole] = useState("")

  useEffect(() => {
    setSelectedRole(t("defaultRole"));
  },[])

  function handleRoleClick(role: string) {
    onRoleSelect(role);
    setSelectedRole(role);
  }
  return (
    <div className="flex flex-wrap justify-center gap-1 pb-5 pt-10 font-barlow  md:gap-7">
      {roles.map((role, index) => (
        <button
          onClick={() => handleRoleClick(role)}
          key={index}
          className={`btn btn-outline rounded-lg border-[#222] capitalize md:w-[100px] ${selectedRole === role ? 'bg-[#222] text-white' : 'text-[#222]'}`}>
          {role}
        </button>
      ))}
    </div>
  );
}
