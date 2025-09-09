import { getServerTranslation } from 'app/i18n';
import TeamRolesContainerClient from './TeamRolesContainerClient';

export default async function TeamRolesContainer({
  lang,
  persons,
  defaultRole,
  roles,
  onRoleSelect
}: {
  lang: string;
  persons: string[];
  defaultRole: string;
  roles: string[];
  onRoleSelect: (role: string) => void;
}) {

  return (
    <TeamRolesContainerClient 
      lang={lang}
      roles={roles}
      onRoleSelect={onRoleSelect}
      defaultRole={defaultRole}
    />
  );
}