using DocumentationUtility.Shared.Models.Abstract;
using System;
using System.Collections.Generic;

namespace DocumentationUtility.Shared.Models
{
    public class DocApiType : DocCSharpItem
    {
        public List<DocApiProperty> Properties { get; protected set; } = new List<DocApiProperty>();

        public DocApiType(Type type) : base(type)
        {
            this.type = type;

            ParseXml();

            if (Name.ToString().Contains("`"))
            {
                var n = GetGenericType(this.type);
                this.type = n.type;
                Name = n.Name;
            }

            ParseProperties();
        }

        private void ParseProperties()
        {
            foreach (var props in type.GetProperties())
            {
                Properties.Add(new DocApiProperty(this, props));
            }
        }

        private DocApiType GetGenericType(Type type)
        {
            string e = "[]";
            if (type.Name.Contains("Task")) e = "";

            DocApiType n;

            Type[] t = type.GetGenericArguments();

            switch (t.Length)
            {
                case 1:
                    {
                        if (t[0].Name.Contains("`"))
                        {
                            n = GetGenericType(t[0]);
                            n.Name += e;
                            return n;
                        }
                        n = new DocApiType(t[0]);
                        n.Name += e;
                        return n;
                    }
                case 2:
                    {
                        n = new DocApiType(typeof(Object));
                        n.Name = $"<{t[0].Name}, {t[1].Name}>";
                        return n;
                    }
                default: 
                    {
                        n = new DocApiType(typeof(Object));
                        n.Name = "untracked_generic";
                        return n;
                    }
            }
        }

        private readonly Type type;
    }
}
