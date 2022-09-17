import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { connect, useModel } from '@umijs/max';
import styles from './index.less';

interface UserPageProps {
    key?:string,
    userModel?:any
}

const UserPage: React.FC<UserPageProps> = (props) => {
  const { name } = useModel('global');  
  console.log(props)
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default connect((state)=>state)(UserPage);
