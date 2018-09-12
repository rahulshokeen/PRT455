using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Mnemonics.Startup))]
namespace Mnemonics
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
