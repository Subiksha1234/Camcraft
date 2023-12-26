import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {

  let navigate = useNavigate();
  let handleBack = () =>{
    localStorage.removeItem("Token");
    localStorage.removeItem("Role");
    localStorage.removeItem("name");
    navigate('/login')
  }
  return (
    <div style={{ backgroundColor: 'white' }}>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#b3cee5" }}>
        <div className="container-fluid">
          <div className='d-flex justify-content-left'>
            <i className="bi bi-arrow-left-circle" onClick={handleBack} style={{ fontSize: '175%', paddingTop: '1%', paddingLeft: '5%', cursor: 'pointer' }}></i>
          </div>
        </div>
      </nav>
      <div className='d-flex' >
        <h1>404 Error</h1>
      </div>
      <div className='d-flex'>
        <h1>Page Not Found</h1>
      </div>
      <p>
        2023-10-15T20:24:58.045+05:30  INFO 2540 --- [           main] com.example.main.ELearningApplication    : Starting ELearningApplication using Java 17.0.6 with PID 2540 (E:\Software\ELearning-Copy\target\classes started by 91890 in E:\Software\ELearning-Copy)
        2023-10-15T20:24:58.050+05:30  INFO 2540 --- [           main] com.example.main.ELearningApplication    : No active profile set, falling back to 1 default profile: "default"
        2023-10-15T20:24:59.900+05:30  INFO 2540 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
        2023-10-15T20:25:00.021+05:30  INFO 2540 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 108 ms. Found 5 JPA repository interfaces.
        2023-10-15T20:25:00.962+05:30  INFO 2540 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
        2023-10-15T20:25:00.977+05:30  INFO 2540 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
        2023-10-15T20:25:00.978+05:30  INFO 2540 --- [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.13]
        2023-10-15T20:25:01.182+05:30  INFO 2540 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
        2023-10-15T20:25:01.182+05:30  INFO 2540 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 3050 ms
        2023-10-15T20:25:01.405+05:30  INFO 2540 --- [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
        2023-10-15T20:25:01.482+05:30  INFO 2540 --- [           main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 6.2.9.Final
        2023-10-15T20:25:01.488+05:30  INFO 2540 --- [           main] org.hibernate.cfg.Environment            : HHH000406: Using bytecode reflection optimizer
        2023-10-15T20:25:01.683+05:30  INFO 2540 --- [           main] o.h.b.i.BytecodeProviderInitiator        : HHH000021: Bytecode provider name : bytebuddy
        2023-10-15T20:25:01.930+05:30  INFO 2540 --- [           main] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
        2023-10-15T20:25:01.957+05:30  INFO 2540 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
        2023-10-15T20:25:02.498+05:30  INFO 2540 --- [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection com.mysql.cj.jdbc.ConnectionImpl@15d58530
        2023-10-15T20:25:02.503+05:30  INFO 2540 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
        2023-10-15T20:25:03.006+05:30  INFO 2540 --- [           main] o.h.b.i.BytecodeProviderInitiator        : HHH000021: Bytecode provider name : bytebuddy
        2023-10-15T20:25:04.082+05:30  INFO 2540 --- [           main] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000490: Using JtaPlatform implementation: [org.hibernate.engine.transaction.jta.platform.internal.NoJtaPlatform]
        2023-10-15T20:25:04.220+05:30  INFO 2540 --- [           main] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
        2023-10-15T20:25:04.692+05:30  INFO 2540 --- [           main] o.s.d.j.r.query.QueryEnhancerFactory     : Hibernate is in classpath; If applicable, HQL parser will be used.
        2023-10-15T20:25:05.765+05:30  WARN 2540 --- [           main] JpaBaseConfiguration$JpaWebConfiguration : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning
        2023-10-15T20:25:06.303+05:30  INFO 2540 --- [           main] o.s.s.web.DefaultSecurityFilterChain     : Will secure any request with [org.springframework.security.web.session.DisableEncodeUrlFilter@7ebefdfa, org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@60f9fb56, org.springframework.security.web.context.SecurityContextHolderFilter@46823e8, org.springframework.security.web.header.HeaderWriterFilter@774b798, org.springframework.web.filter.CorsFilter@751eb9a9, org.springframework.security.web.authentication.logout.LogoutFilter@59b5251d, com.example.main.config.JwtAuthenticationFilter@93cc5eb, org.springframework.security.web.savedrequest.RequestCacheAwareFilter@29ae939c, org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@6a8d638, org.springframework.security.web.authentication.AnonymousAuthenticationFilter@749ebc39, org.springframework.security.web.session.SessionManagementFilter@5e9db5e7, org.springframework.security.web.access.ExceptionTranslationFilter@3872c85f, org.springframework.security.web.access.intercept.AuthorizationFilter@5a98983b]
        2023-10-15T20:25:06.853+05:30  INFO 2540 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
        2023-10-15T20:25:06.870+05:30  INFO 2540 --- [           main] com.example.main.ELearningApplication    : Started ELearningApplication in 9.442 seconds (process running for 10.856)
        2023-10-15T20:34:38.547+05:30  INFO 2540 --- [nio-8080-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
        2023-10-15T20:34:38.547+05:30  INFO 2540 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
        2023-10-15T20:34:38.547+05:30  INFO 2540 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 0 ms

      </p>
      {/* <button className='btn btn-primary' onClick={handleBack}>Back</button> */}
    </div>
  )
}
