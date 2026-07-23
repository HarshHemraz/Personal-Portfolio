import './ProfileCard.css'

interface ProfileCardProps {
    name: string;
    tagline: string;
    location: string;
    username: string;
    lastSeen: string;
    avatarUrl: string;
}

function ProfileCard({ name, tagline, location, username, lastSeen,avatarUrl} : ProfileCardProps) {
    return (
    <div className='profile-card'>

        <div className='flex justify-center'>
        <img src={avatarUrl} alt='avatar' className='avatar' />
        </div>

        <h1 className='name'>{name}</h1>
        <p className='tagline'>{tagline}</p>
        <p className='location'>📍 {location}</p>

        <div className='flex flex-row'>
            <img src={avatarUrl} className='badge-avatar' />
            <img src={avatarUrl} className='badge-avatar' />
            <img src={avatarUrl} className='badge-avatar' />
            <img src={avatarUrl} className='badge-avatar' />
            <img src={avatarUrl} className='badge-avatar' />
            </div>
            <div className='badge-text'>
                <p className='username'>
                    {username} 
                </p>
                <p className='last-seen'>Last seen {lastSeen}</p>
            </div>
        </div>
   
    );
}

export default ProfileCard;
