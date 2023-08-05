import { NavLink } from 'react-router-dom';
export default function Header() {
	const navItem = {
		textDecoration: 'none',
		color: '#000',
		fontSize: '18px',
		display: 'block',
		padding: '6px 12px',
		letterSpacing: '1px',
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-info sticky-top shadow'>
			<div className='container-fluid'>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<NavLink
								to='/'
								style={navItem}
								className={({ isActive, isPending }) =>
									isPending ? 'pending' : isActive ? 'text-info rounded bg-white' : ''
								}
							>
								Trang chủ
							</NavLink>
						</li>

						<li className='nav-item'>
							<NavLink
								to='/to-do-simple'
								style={navItem}
								className={({ isActive, isPending }) =>
									isPending ? 'pending' : isActive ? 'text-info rounded bg-white' : ''
								}
							>
								My Todo Simple
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
