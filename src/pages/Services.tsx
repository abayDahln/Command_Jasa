
import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';
import colors from '../styles';
import {serv} from '../DataSource';



function Services() {
  return (
    <div className="container mx-auto px-4 py-12" style={{ paddingTop: 150 }}>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 s-shadow" style={{ color: colors.textPrimary }}>All Services</h1>
        <p className="max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
          Providing Services to Create Innovative and Functional Digital Solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {serv.map((service, index) => (
          <Link
            key={service.id}
            to={`/services/${service.id}`}
            className={`bg-[#1a1f3d] rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300 ${(index + 1) % 2 === 1 ? 'ser-card' : 'ser-card2'}`}
          >
            <div className='service-card2'>
              <div className="mb-4" style={{ color: colors.optionally }}>{service.icon}</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>{service.title}</h3>
              <p className="mb-4" style={{ color: colors.textSecondary }}>{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center" style={{ color: colors.textSecondary }}>
                    <Wrench className="w-4 h-4 mr-2" style={{ color: colors.primary }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;
export { serv };
