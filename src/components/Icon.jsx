export default function Icon({ path, size = 20, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      dangerouslySetInnerHTML={{ __html: path }}
    />
  );
}

export const Icons = {
  Plus: (props) => (
    <Icon
      path='<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>'
      {...props}
    />
  ),
  Trash: (props) => (
    <Icon
      path='<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>'
      {...props}
    />
  ),
  Zap: (props) => (
    <Icon
      path='<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>'
      {...props}
    />
  ),
  Shield: (props) => (
    <Icon path='<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>' {...props} />
  ),
  CreditCard: (props) => (
    <Icon
      path='<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>'
      {...props}
    />
  ),
  Dollar: (props) => (
    <Icon
      path='<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>'
      {...props}
    />
  ),
  PieChart: (props) => (
    <Icon
      path='<path d="M21.21 15.89A10 10 0 1 1 8.11 2.79"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>'
      {...props}
    />
  ),
  X: (props) => (
    <Icon
      path='<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'
      {...props}
    />
  ),
};
