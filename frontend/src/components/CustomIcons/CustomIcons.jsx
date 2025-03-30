// eslint-disable-next-line no-unused-vars
function CustomIcons({ icon: IconComponent, size = 15, ...props }) {
    return <IconComponent size={size} {...props} />;
}

export default CustomIcons;
