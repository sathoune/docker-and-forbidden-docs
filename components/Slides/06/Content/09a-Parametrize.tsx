const ParametrizeA = () => {
  return (
    <section data-auto-animate>
      <h2>{"Parametrize"}</h2>
      <pre>
        <code data-line-numbers>
          {`# .env
 SERVER_PORT=6666
 TARGET_STAGE=production
          `}
        </code>
      </pre>
      <pre>
        <code data-line-numbers>
          {`# docker-compose.yml
services:
  app:
    build:
      context: .
      target: \${TARGET_STAGE}
    ports:
      - "\${SERVER_PORT}:3000"
    command: python -m main
          `}
        </code>
      </pre>
    </section>
  );
};

export default ParametrizeA;
