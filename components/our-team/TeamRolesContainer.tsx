import { getServerTranslation } from 'app/i18n';
import React, { useEffect, useState } from 'react';
// import { useSubmit } from 'stores/submitStore';

export default async function TeamRolesContainer({
  lang,
  roles,
  onRoleSelect
}: {
  lang: string;
  roles: string[];
  onRoleSelect: (role: string) => void;
}) {
  // const {selectedRole, updateRole} = useSubmit();

  const { t } = await getServerTranslation(lang, "ourTeam");

  const [selectedRole, setSelectedRole] = useState("")

  useEffect(() => {
    setSelectedRole(t("defaultRole"));
  },[t])

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
