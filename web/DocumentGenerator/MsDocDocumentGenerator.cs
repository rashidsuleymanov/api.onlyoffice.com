/*
 *
 * (c) Copyright Ascensio System Limited 2010-2017
 *
 * This program is freeware. You can redistribute it and/or modify it under the terms of the GNU 
 * General Public License (GPL) version 3 as published by the Free Software Foundation (https://www.gnu.org/copyleft/gpl.html). 
 * In accordance with Section 7(a) of the GNU GPL its Section 15 shall be amended to the effect that 
 * Ascensio System SIA expressly excludes the warranty of non-infringement of any third-party rights.
 *
 * THIS PROGRAM IS DISTRIBUTED WITHOUT ANY WARRANTY; WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR
 * FITNESS FOR A PARTICULAR PURPOSE. For more details, see GNU GPL at https://www.gnu.org/copyleft/gpl.html
 *
 * You can contact Ascensio System SIA by email at sales@onlyoffice.com
 *
 * The interactive user interfaces in modified source and object code versions of ONLYOFFICE must display 
 * Appropriate Legal Notices, as required under Section 5 of the GNU GPL version 3.
 *
 * Pursuant to Section 7 § 3(b) of the GNU GPL you must retain the original ONLYOFFICE logo which contains 
 * relevant author attributions when distributing the software. If the display of the logo in its graphic 
 * form is not reasonably feasible for technical reasons, you must include the words "Powered by ONLYOFFICE" 
 * in every copy of the program you distribute. 
 * Pursuant to Section 7 § 3(e) we decline to grant you any rights under trademark law for use of our trademarks.
 *
*/


using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Routing;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;
using System.Xml.Serialization;

using ASC.Api.Enums;
using ASC.Api.Impl;
using ASC.Api.Interfaces;
using ASC.Api.Utils;
using ASC.Api.Web.Help.Helpers;
using Autofac;
using Autofac.Core;
using log4net;
using Newtonsoft.Json;

namespace ASC.Api.Web.Help.DocumentGenerator
{
    [DataContract(Name = "response", Namespace = "")]
    public class MsDocFunctionResponse
    {
        [DataMember(Name = "output")]
        public Dictionary<string, string> Outputs { get; set; }
    }

    public class result : IXmlSerializable
    {
        public int status = 0;
        public Dictionary<string, object> response;

        public result()
        {

        }

        public XmlSchema GetSchema()
        {
            return null;
        }

        public void ReadXml(XmlReader reader)
        {
            throw new NotImplementedException();
        }

        public void WriteXml(XmlWriter writer)
        {
            writer.WriteElementString("status", "0");
            writer.WriteStartElement("response");
            foreach (KeyValuePair<string, object> keyValue in response)
            {
                SaveDictionary(writer, keyValue);
            }
            writer.WriteEndElement();
        }

        private void SaveDictionary(XmlWriter writer, KeyValuePair<string, object> keyValue)
        {
            string str = "";
            if (keyValue.Value.GetType() == str.GetType())
            {
                writer.WriteElementString(keyValue.Key,  keyValue.Value.ToString());
            }
            else
            {
                writer.WriteStartElement(keyValue.Key);
                foreach (KeyValuePair<string, object> keyValue1 in (Dictionary<string,object>)keyValue.Value)
                {
                    SaveDictionary(writer, keyValue1);
                }
                writer.WriteEndElement();
            }
        }
    }

    [DataContract(Name = "entrypoint", Namespace = "")]
    public class MsDocEntryPoint
    {
        [DataMember(Name = "summary")]
        public string Summary { get; set; }

        [DataMember(Name = "remarks")]
        public string Remarks { get; set; }

        [DataMember(Name = "name")]
        public string Name { get; set; }

        [DataMember(Name = "example")]
        public string Example { get; set; }

        [DataMember(Name = "functions")]
        public List<MsDocEntryPointMethod> Methods { get; set; }
    }

    [DataContract(Name = "function", Namespace = "")]
    public class MsDocEntryPointMethod : IEquatable<MsDocEntryPointMethod>
    {
        [DataMember(Name = "summary")]
        public string Summary { get; set; }

        [DataMember(Name = "authentification", EmitDefaultValue = true)]
        public bool Authentification { get; set; }

        [DataMember(Name = "remarks")]
        public string Remarks { get; set; }

        [DataMember(Name = "httpmethod")]
        public string HttpMethod { get; set; }

        [DataMember(Name = "url")]
        public string Path { get; set; }

        [DataMember(Name = "example")]
        public string Example { get; set; }

        [DataMember(Name = "params")]
        public List<MsDocEntryPointMethodParams> Params { get; set; }

        [DataMember(Name = "returns")]
        public string Returns { get; set; }

        [DataMember(Name = "responses")]
        public List<MsDocFunctionResponse> Response { get; set; }

        [DataMember(Name = "category")]
        public string Category { get; set; }

        [DataMember(Name = "notes")]
        public string Notes { get; set; }

        [DataMember(Name = "short")]
        public string ShortName { get; set; }

        [IgnoreDataMember]
        private string _functionName;

        [DataMember(Name = "function")]
        public string FunctionName
        {
            get { return !string.IsNullOrEmpty(ShortName) ? ShortName.Trim() : _functionName; }
            set { _functionName = value.Trim(); }
        }

        public MsDocEntryPoint Parent { get; set; }

        [DataMember(Name = "visible")]
        public bool Visible { get; set; }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (MsDocEntryPointMethod)) return false;
            return Equals((MsDocEntryPointMethod)obj);
        }

        public bool Equals(MsDocEntryPointMethod other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other.Path, Path) && Equals(other.HttpMethod, HttpMethod);
        }

        public override string ToString()
        {
            return string.Format("{0} {1}", HttpMethod, Path).ToLowerInvariant();
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((Path != null ? Path.GetHashCode() : 0)*397) ^ (HttpMethod != null ? HttpMethod.GetHashCode() : 0);
            }
        }

        public static bool operator ==(MsDocEntryPointMethod left, MsDocEntryPointMethod right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(MsDocEntryPointMethod left, MsDocEntryPointMethod right)
        {
            return !Equals(left, right);
        }
    }

    [DataContract(Name = "param", Namespace = "")]
    public class MsDocEntryPointMethodParams
    {
        [DataMember(Name = "name")]
        public string Name { get; set; }

        [DataMember(Name = "type")]
        public string Type { get; set; }

        [IgnoreDataMember]
        public Type PureType { get; set; }

        [DataMember(Name = "sendmethod")]
        public string Method { get; set; }

        [DataMember(Name = "description")]
        public string Description { get; set; }

        [DataMember(Name = "remarks")]
        public string Remarks { get; set; }

        [DataMember(Name = "optional")]
        public bool IsOptional { get; set; }

        [DataMember(Name = "visible")]
        public bool Visible { get; set; }
    }

    public class MsDocDocumentGenerator
    {
        private static readonly Regex RouteRegex = new Regex(@"\{([^\}]+)\}", RegexOptions.Compiled);
        private readonly List<MsDocEntryPoint> _points = new List<MsDocEntryPoint>();
        private readonly string[] _responseFormats = (ConfigurationManager.AppSettings["enabled_response_formats"] ?? "").Split('|');

        public MsDocDocumentGenerator(IContainer container)
        {
            Container = container;
        }

        public MsDocDocumentGenerator()
        {

        }

        #region IApiDocumentGenerator Members

        public IContainer Container { get; set; }

        public List<MsDocEntryPoint> Points
        {
            get { return _points; }
        }
        
        private void SaveMembers(XElement entryPointDoc, List<XElement> memberdesc)
        {
            var root = new MsDocEntryPoint
            {
                Summary = entryPointDoc.Element("summary").ValueOrNull(),
                Remarks = entryPointDoc.Element("remarks").ValueOrNull(),
                Name = entryPointDoc.Element("name").ValueOrNull(),
                Example = entryPointDoc.Element("example").ValueOrNull(),
                Methods = new List<MsDocEntryPointMethod>()
            };
            for (int i = 0; i < memberdesc.Count; i++)
            {
                var methodParams = memberdesc[i].Elements("param").ToList();
                var pointMethod = new MsDocEntryPointMethod
                {
                    Path = memberdesc[i].Element("path").ValueOrNull(),
                    HttpMethod = memberdesc[i].Element("httpMethod").ValueOrNull(),
                    Authentification = string.Equals(memberdesc[i].Element("requiresAuthorization").ValueOrNull(), bool.FalseString, StringComparison.OrdinalIgnoreCase),
                    FunctionName = GetFunctionName(memberdesc[i].Attribute("name").ValueOrNull()),
                    Summary = memberdesc[i].Element("summary").ValueOrNull(),
                    Visible = !string.Equals(memberdesc[i].Element("visible").ValueOrNull(), bool.FalseString, StringComparison.OrdinalIgnoreCase),
                    Remarks = memberdesc[i].Element("remarks").ValueOrNull().Replace(Environment.NewLine, @"<br />"),
                    Returns = memberdesc[i].Element("returns").ValueOrNull(),
                    Example = memberdesc[i].Element("example").ValueOrNull().Replace(Environment.NewLine, @"<br />"),
                    Response = GetResponse(memberdesc[i].Element("returns").Attribute("type").ValueOrNull()),
                    Category = memberdesc[i].Element("category").ValueOrNull(),
                    Notes = memberdesc[i].Element("notes").ValueOrNull(),
                    ShortName = memberdesc[i].Element("short").ValueOrNull(),
                    Params = new List<MsDocEntryPointMethodParams>()
                };
                for (int j = 0; j < methodParams.Count; j++)
                {
                    var param = new MsDocEntryPointMethodParams
                    {
                        Description = methodParams[j].ValueOrNull(),
                        Name = methodParams[j].Attribute("name").ValueOrNull(),
                        Remarks = methodParams[j].Attribute("remark").ValueOrNull(),
                        IsOptional = string.Equals(methodParams[j].Attribute("optional").ValueOrNull(), bool.TrueString, StringComparison.OrdinalIgnoreCase),
                        Visible = !string.Equals(methodParams[j].Attribute("visible").ValueOrNull(), bool.FalseString, StringComparison.OrdinalIgnoreCase),
                        PureType = GetPureType(pointMethod.Params.Count, memberdesc[i].Attribute("name").ValueOrNull()),
                        Type = GetPureType(pointMethod.Params.Count, memberdesc[i].Attribute("name").ValueOrNull()).FullName,
                        Method = methodParams[j].Attribute("method") != null ? methodParams[j].Attribute("method").ValueOrNull() : "body"
                    };
                    pointMethod.Params.Add(param);
                }
                if (pointMethod.Visible)
                {
                    root.Methods.Add(pointMethod);
                }
            }
            Points.Add(root);
        }

        public void GenerateDocForEntryPoint(string file)
        {

            var members = XDocument.Load(file).Root.ThrowIfNull(new ArgumentException("Bad documentation file " + file)).Element("members").Elements("member");


            XElement entryPointDoc = null;
            List<XElement> memberdesc = new List<XElement>();
            foreach (var member in members)
            {
                if (member.Element("name") != null) 
                {
                    if (entryPointDoc == null)
                    {
                        entryPointDoc = member;
                    }
                    else
                    {
                        if (member.Element("path") == null)
                        {
                            SaveMembers(entryPointDoc, memberdesc);
                            memberdesc.Clear();
                            entryPointDoc = member;
                        }
                    }
                }
                else if (member.Element("path") != null)
                {
                    memberdesc.Add(member);
                }
            }

            SaveMembers(entryPointDoc, memberdesc);
        }

        private List<MsDocFunctionResponse> GetResponse(string type)
        {
            List<MsDocFunctionResponse> response = new List<MsDocFunctionResponse>();
            var split = type.Split(',');
            response.Add(GetResponse(split[0], split[1]));
            return response;
        }

        private MsDocFunctionResponse GetResponse(string type, string file)
        {
            var xml = Path.Combine(AppDomain.CurrentDomain.RelativeSearchPath, "../../xml/" + file.Trim() + ".xml");
            var members = XDocument.Load(xml).Root.ThrowIfNull(new ArgumentException("Bad documentation file " + xml)).Element("members").Elements("member");
            var needMembers = members.Where(mem => mem.Attribute("name").ValueOrNull().Contains("P:" + type)).ToList();
            var responseParam = new Dictionary<string, object>();
            responseParam = Parse(needMembers, responseParam);
            var response = new result
            {
                response = responseParam
            };
            var responsejson = JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented);
            var msdoc = new MsDocFunctionResponse();
            msdoc.Outputs = new Dictionary<string, string>();
            msdoc.Outputs.Add("application/json", responsejson);
            XmlSerializer xmlSerializer = new XmlSerializer(response.GetType());

            using (StringWriter textWriter = new StringWriter())
            {
                xmlSerializer.Serialize(textWriter, response);
                var text = textWriter.ToString();
                text = text.Remove(0, text.IndexOf('\n') + 1);
                msdoc.Outputs.Add("text/xml", text);
            }
            return msdoc;
        }

        private Dictionary<string, object> Parse (List<XElement> needMembers, Dictionary<string, object> responseParam)
        {
            needMembers.ForEach(member =>
            {
                if (member.Element("example") != null)
                {
                    responseParam.Add(member.Attribute("name").ValueOrNull().Split('.').Last().ToLower(), member.Element("example").ValueOrNull());
                }
                else
                {
                    var split = member.Element("type").ValueOrNull().Split(',');
                    var xml = Path.Combine(AppDomain.CurrentDomain.RelativeSearchPath, "../../xml/" + split[1].Trim() + ".xml");
                    var members = XDocument.Load(xml).Root.ThrowIfNull(new ArgumentException("Bad documentation file " + xml)).Element("members").Elements("member");
                    var newMembers = members.Where(mem => mem.Attribute("name").ValueOrNull().Contains("P:" + split[0])).ToList();
                    Parse(needMembers, responseParam);
                }
            });

            return responseParam;
        }


        private Type GetPureType(int number, string name)
        {
            var types = name.Split('(')[1].Split(')')[0].Split(',');

            return  Type.GetType(types[number]);
        }

        public static void GenerateRequestExample(MsDocEntryPointMethod method)
        {
            var sb = new StringBuilder();

            var visible = method.Params.Where(p => p.Visible).ToDictionary(p => p, p => ClassNamePluralizer.ToHumanName(p.Type, p.PureType));
            var urlParams = visible.Where(p => p.Key.Method == "url").ToList();
            var bodyParams = visible.Except(urlParams).ToList();

            var path = method.Path.ToLowerInvariant();
            var query = false;
            urlParams.ForEach(p => {
                if (path.IndexOf('{' + p.Key.Name.ToLowerInvariant() + '}') > 0)
                {
                    path = path.Replace('{' + p.Key.Name.ToLowerInvariant() + '}', HttpUtility.UrlEncode(ParamToJson(p.Key, p.Value, true).ToString()));
                }
                else
                {
                    var value = ParamToJson(p.Key, p.Value, true).ToString();
                    if (value == "null") return;

                    path += string.Format("{0}{1}={2}", query ? "&" : "?", p.Key.Name, HttpUtility.UrlEncode(value));
                    query = true;
                }
            });

            var args = new Dictionary<string, object>();
            bodyParams.ForEach(p => args.Add(p.Key.Name, ParamToJson(p.Key, p.Value)));

            sb.AppendFormat("{0} {1}", method.HttpMethod, path).AppendLine()
                .AppendLine("Host: yourportal.onlyoffice.com")
                .AppendLine("Content-Type: application/json")
                .Append("Accept: application/json");

            if (args.Any()) {
                sb.AppendLine().AppendLine()
                   .Append(JsonConvert.SerializeObject(args, Newtonsoft.Json.Formatting.Indented));
            }

            method.Example = sb.ToString();
        }

        private static object ParamToJson(MsDocEntryPointMethodParams param, TypeDescription desc, bool asString = false)
        {
            if (desc.JsonParam != null) return desc.JsonParam;

            object obj;
            if (param.Type.StartsWith("System.Collections.Generic.IEnumerable`1[")
                || param.Type.StartsWith("System.Collections.Generic.List`1")
                || param.Type.EndsWith("[]") && (param.PureType.IsGenericType || param.PureType.IsArray))
            {
                var elementType = param.PureType.IsArray ? param.PureType.GetElementType() : param.PureType.GenericTypeArguments[0];

                Type listType = typeof(List<>).MakeGenericType(new [] { elementType });
                var list = (System.Collections.IList)Activator.CreateInstance(listType);

                var el = ClassNamePluralizer.ToHumanName(elementType.ToString(), elementType);

                if (el != null && el.JsonParam != null && el.JsonParam.GetType() == elementType)
                {
                    list.Add(el.JsonParam);
                }
                else if (!elementType.IsAbstract)
                {
                    list.Add(Activator.CreateInstance(elementType));
                }

                obj = list;
            } else {
                obj = Activator.CreateInstance(param.PureType);
            }

            if (obj is Enum)
            {
                var names = param.PureType.GetEnumNames();
                obj = names.Length > 0 ? names[0].ToLower() : obj.ToString();
            }

            if (asString)
            {
                return obj == null ? "null" : (obj is string ? (string)obj : JsonConvert.SerializeObject(obj)).Trim('"');
            }

            return obj;
        }

        private static string GetParameterTypeRepresentation(Type paramType)
        {
            return paramType.IsEnum
                       ? string.Join(", ", Enum.GetNames(paramType))
                       : paramType.ToString();
        }

        private static string GetFunctionName(string functionName)
        {
            var tmp = functionName.Split('(')[0].Split('.');
            return Regex.Replace(Regex.Replace(tmp[tmp.Length - 1], "[a-z][A-Z]+", match => (match.Value[0] + " " + match.Value.Substring(1, match.Value.Length - 2) + (" " + match.Value[match.Value.Length - 1]).ToLowerInvariant())), @"\s+", " ");
        }

        private static XElement CreateEmptyParams(IApiMethodCall apiMethodCall)
        {
            return new XElement("description", apiMethodCall.GetParams().Select(x => new XElement("param", new XAttribute("name", x.Name))));
        }

        private readonly HashSet<Type> _alreadyRegisteredTypes = new HashSet<Type>();

        private List<MsDocFunctionResponse> TryCreateResponse(IApiMethodCall apiMethod, IContainer container, XElement returns)
        {
            var samples = new List<MsDocFunctionResponse>();
            var returnType = apiMethod.MethodCall.ReturnType;
            var collection = false;
            if (apiMethod.MethodCall.ReturnType.IsGenericType)
            {
                //It's collection
                returnType = apiMethod.MethodCall.ReturnType.GetGenericArguments().FirstOrDefault();
                collection = true;
            }
            if (returnType != null)
            {
                var sample = returnType.GetMethod("GetSample", BindingFlags.Static | BindingFlags.Public);
                if (sample != null)
                {
                    samples = GetSamples(apiMethod, container, sample, collection, returnType).ToList();
                    _alreadyRegisteredTypes.Add(returnType);
                }
                else if (returns != null && returns.Elements("see").Any())
                {
                    var cref = returns.Elements("see").Attributes("cref").FirstOrDefault().ValueOrNull();
                    if (!string.IsNullOrEmpty(cref) && cref.StartsWith("T:"))
                    {
                        var classname = cref.Substring(2);
                        //Get the type
                        try
                        {

                            var crefType = Type.GetType(classname) ??
                                           _alreadyRegisteredTypes.SingleOrDefault(x => x.Name.Equals(classname, StringComparison.OrdinalIgnoreCase)) ??
                                           apiMethod.MethodCall.Module.GetType(classname, true) ??
                                           apiMethod.MethodCall.Module.GetTypes().SingleOrDefault(x => x.Name.Equals(classname, StringComparison.OrdinalIgnoreCase)) ??
                                           AppDomain.CurrentDomain.GetAssemblies().SelectMany(x => x.GetTypes()).SingleOrDefault(x => x.Name.Equals(classname, StringComparison.OrdinalIgnoreCase));

                            if (crefType != null)
                            {
                                sample = crefType.GetMethod("GetSample", BindingFlags.Static | BindingFlags.Public);
                                if (sample != null)
                                {
                                    samples = GetSamples(apiMethod, container, sample, collection, crefType).ToList();
                                }
                            }
                        }
                        catch (Exception)
                        {
                        }
                    }
                }
            }

            return samples;
        }

        private IEnumerable<MsDocFunctionResponse> GetSamples(IApiMethodCall apiMethod, IContainer container, MethodInfo sample, bool collection, Type returnType)
        {
            try
            {
                using (var lifetimeScope = container.BeginLifetimeScope())
                {
                    var routeContext = new RequestContext(new HttpContextWrapper(HttpContext.Current), new RouteData());
                    var apiContext = lifetimeScope.Resolve<ApiContext>(new NamedParameter("requestContext", routeContext));
                    var response = lifetimeScope.Resolve<IApiStandartResponce>();
                    response.Status = ApiStatus.Ok;

                    apiContext.RegisterType(returnType);

                    var sampleResponse = sample.Invoke(null, new object[0]);
                    if (collection)
                    {
                        //wrap in array
                        sampleResponse = new List<object> { sampleResponse };
                    }
                    response.Response = sampleResponse;

                    var serializers = container.Resolve<IEnumerable<IApiSerializer>>().Where(x => x.CanSerializeType(apiMethod.MethodCall.ReturnType));
                    return serializers.Select(apiResponder => new MsDocFunctionResponse
                        {
                            Outputs = CreateResponse(apiResponder, response, apiContext)
                        });
                }
            }
            catch (Exception err)
            {
                LogManager.GetLogger("ASC.Api").Error(err);
                return Enumerable.Empty<MsDocFunctionResponse>();
            }
        }

        private Dictionary<string, string> CreateResponse(IApiSerializer apiResponder, IApiStandartResponce response, ApiContext apiContext)
        {
            var examples = new Dictionary<string, string>();
            foreach (var extension in apiResponder.GetSupportedExtensions().Where(extension => _responseFormats.Contains(extension)))
            {
                //Create request context
                using (var writer = new StringWriter())
                {
                    var contentType = apiResponder.RespondTo(response, writer, "dummy" + extension, string.Empty, true, false);
                    writer.Flush();
                    examples[contentType.MediaType] = writer.GetStringBuilder().ToString();
                }
            }
            return examples;
        }

        #endregion

        private static string GuesMethod(string textAttr, string routingUrl, string httpmethod)
        {
            if ("get".Equals(httpmethod, StringComparison.OrdinalIgnoreCase))
                return "url";
            var matches = RouteRegex.Matches(routingUrl);
            textAttr = textAttr.ToLowerInvariant();
            return
                matches.Cast<Match>().Where(x => x.Success && x.Groups[1].Success).Select(
                    x => x.Groups[1].Value.ToLowerInvariant()).Any(
                        routeConstr => routeConstr == textAttr || routeConstr.StartsWith(textAttr + ":"))
                    ? "url"
                    : "body";
        }

        public static string GetMethodString(MethodBase methodCall)
        {
            var str = string.Format("M:{0}.{1}", methodCall.DeclaringType.FullName, methodCall.Name);
            var callParam = methodCall.GetParameters();
            if (callParam.Length > 0)
            {
                str += string.Format("({0})",
                                     string.Join(",", callParam.Select(x => MakeParamName(x.ParameterType)).ToArray()));
            }
            return str;
        }

        private static string MakeParamName(Type parameterType)
        {
            var name = parameterType.FullName.Replace('+', '.');
            name = Regex.Replace(name, @"\[.+\]", "");
            if (parameterType.IsGenericType)
            {
                name = Regex.Replace(name, @"`\d+", "");
                var genericTypes = parameterType.GetGenericArguments();
                name += "{" + string.Join(",", genericTypes.Select(MakeParamName).ToArray()) + "}";
            }
            return name;
        }
    }


    internal static class XmlExt
    {
        internal static string ValueOrNull(this XElement element)
        {
            return element == null ? "" : element.Value;
        }

        internal static string ValueOrNull(this XAttribute element)
        {
            return element == null ? "" : element.Value;
        }
    }
}