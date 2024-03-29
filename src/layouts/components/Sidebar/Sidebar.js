import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/components/Icons';
import config from '~/config';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
       <Menu>
            <MenuItem title="For your" to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeActiveIcon />} />
            <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} iconActive={<UserGroupActiveIcon />} />
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} iconActive={<LiveActiveIcon />} />
       </Menu>
    </aside>
}

export default Sidebar;