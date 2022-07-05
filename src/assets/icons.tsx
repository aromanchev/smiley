type IconProps = {
  width?: number;
  height?: number;
};

export const ETHIcon = ({ width, height }: IconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={width}
    height={height}
  >
    <path fill="#7880e7" d="M11,24L25,2l14,22l-14,8L11,24z" />
    <path fill="#5c64c7" d="M25,2l14,22l-14,8V2z" />
    <path fill="#7880e7" d="M11,27l14,8l14-8L25,46L11,27z" />
    <path
      fill="#5c64c7"
      d="M25,35l14-8L25,46V35z M11,24l14-6l14,6l-14,8L11,24z"
    />
    <path fill="#2a3192" d="M25,18l14,6l-14,8V18z" />
  </svg>
);

export const WarningIcon = ({ width, height }: IconProps): JSX.Element => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    width={width || 123}
    height={height || 97}
    viewBox="0 0 123 97"
  >
    <g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M65.45,1.972l55.594,87.323c1.673,2.63,3.117,8.016,0,8.016H1.837 c-3.118,0-1.676-5.386,0-8.016L57.431,1.972C59.106-0.658,63.774-0.656,65.45,1.972L65.45,1.972z M56.578,74.146h9.682v8.561 h-9.682V74.146L56.578,74.146z M66.254,68.217H56.58c-0.964-11.756-2.982-19.216-2.982-30.955c0-4.331,3.51-7.842,7.841-7.842 c4.332,0,7.842,3.511,7.842,7.842C69.282,48.996,67.236,56.471,66.254,68.217L66.254,68.217z"
      />
    </g>
  </svg>
);
